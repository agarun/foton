class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :photos, through: :taggings

  validates :name,
            length: {
              maximum: 20,
              message: 'cannot exceed 20 characters'
            },
            uniqueness: true
end
