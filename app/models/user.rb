class User < ApplicationRecord
  has_many :photos, -> { where is_profile_photo: false },
           foreign_key: :author_id
  has_one :cover_photo, -> { where is_cover_photo: true },
          foreign_key: :author_id,
          class_name: :Photo
  has_one :profile_photo, -> { where is_profile_photo: true },
          foreign_key: :author_id,
          class_name: :Photo

  has_many :initiated_follows,
           class_name: :Follow,
           foreign_key: :follower_id,
           dependent: :destroy
  has_many :received_follows,
           class_name: :Follow,
           foreign_key: :followed_id,
           dependent: :destroy
  has_many :following,
           through: :initiated_follows,
           source: :followed
  has_many :followers,
           through: :received_follows,
           source: :follower

  before_validation { username.downcase! }

  validates :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true
  validates :username,
            uniqueness: { case_sensitive: false },
            length: { minimum: 4, maximum: 24 },
            exclusion: { in: %w[about discover search login logout
                                upload admin], message: 'is unavailable.' }
  validate :check_invalid_characters
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_unique_session_token
  after_save :assign_default_profile_photo

  def self.find_by_credentials(username, plaintext_password)
    user = User.find_by(username: username)
    user if user && user.valid_password?(plaintext_password)
  end

  def password
    @password
  end

  def password=(plaintext_password)
    @password = plaintext_password
    self.password_digest = BCrypt::Password.create(plaintext_password)
  end

  def valid_password?(plaintext_password)
    BCrypt::Password
      .new(password_digest)
      .is_password?(plaintext_password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save! && self.session_token
  end

  def to_param
    username
  end

  def follow(other_user)
    following << other_user
  end

  def unfollow(other_user)
    following.delete(other_user)
  end

  private

  def ensure_unique_session_token
    loop do
      self.session_token = generate_session_token
      break if User.find_by(session_token: session_token).nil?
    end
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def check_invalid_characters
    if !username.empty? && !username.match(/\A[a-zA-Z0-9_]+\Z/)
      errors.add(:username, "can only have letters, numbers, and _.")
    end
  end

  def check_blacklisted_usernames
    if %w[discover about search admin].include?(username)
      errors.add(:username, "is already taken.")
    end
  end

  def assign_default_profile_photo
    if profile_photo.nil?
      photos.create(
        author_id: id,
        is_profile_photo: true
      )
      reload_profile_photo
    end
  end
end
