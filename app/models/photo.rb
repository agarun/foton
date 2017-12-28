class Photo < ApplicationRecord
  validates :is_cover_photo,
            uniqueness: { scope: :author_id,
                          message: 'can only have 1 cover photo' },
            if: :is_cover_photo
  validates :is_profile_photo,
            uniqueness: { scope: :author_id,
                          message: 'can only have 1 profile photo' },
            if: :is_profile_photo

  belongs_to :author, class_name: :User
end
