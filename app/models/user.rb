class User < ApplicationRecord
  include PgSearch
  pg_search_scope :full_text_search_users,
                  against: %i[username location],
                  using: { tsearch: { prefix: true } }

  has_many :photos,
           -> { where(is_profile_photo: false).order('created_at DESC') },
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

  has_many :likes, dependent: :destroy
  has_many :liked_photos, through: :likes, source: :photo

  before_validation { username.downcase! }
  before_validation :ensure_unique_session_token

  validates :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true
  validates :username,
            uniqueness: { case_sensitive: false },
            length: { minimum: 4, maximum: 24 },
            exclusion: { in: %w[about discover search login logout
                                upload admin], message: 'is unavailable.' }
  validate :check_invalid_characters
  validates :password, length: { minimum: 6, allow_nil: true }

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

  def follows?(other_user)
    following.include?(other_user)
  end

  def update_profile_photo(new_profile_photo)
    db_profile_photo = profile_photo

    Photo.transaction do
      db_profile_photo&.destroy
      Photo.create!(
        author_id: id,
        is_profile_photo: true,
        image: new_profile_photo
      )
    end

    reload_profile_photo
  end

  def update_cover_photo(new_cover_photo_id)
    db_cover_photo = cover_photo
    if cover_photo
      db_cover_photo.is_cover_photo = false
      db_cover_photo.save!
    end

    new_cover_photo = Photo.find(new_cover_photo_id)
    new_cover_photo.is_cover_photo = true
    new_cover_photo.save!
    reload_cover_photo
  end

  private

  def ensure_unique_session_token
    if User.find_by(session_token: session_token).nil?
      self.session_token = generate_session_token
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
