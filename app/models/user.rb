class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :username, length: { minimum: 4, maximum: 24 }
  validates :password, length: { minimum: 6, allow_nil: true }

  def self.find_by_credentials(username, plaintext_password)
    user = User.find_by(username: username)
    user if user && user.valid_password?(plaintext_password)
  end

  after_initialize :ensure_unique_session_token

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

  private

  def ensure_unique_session_token
    loop do
      self.session_token ||= generate_session_token
      break if User.find_by(session_token: session_token).nil?
    end
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end
end
