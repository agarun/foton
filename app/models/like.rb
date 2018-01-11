class Like < ApplicationRecord
  belongs_to :photo
  belongs_to :user

  validates :user, uniqueness: {
    scope: :photo,
    message: 'error: user can only like a photo once'
  }
end
