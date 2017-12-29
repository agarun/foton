class Photo < ApplicationRecord
  belongs_to :author, class_name: :User

  has_attached_file :image,
                    styles: { medium: "960x960>", thumb: "100x100>" }

  validates_attachment :image,
                       presence: true,
                       content_type: { content_type: /\Aimage\/.*\z/ },
                       size: { in: 0..10.megabytes }

  validates :is_cover_photo,
            uniqueness: { scope: :author_id,
                          message: 'error: can only have 1 cover photo' },
            if: :is_cover_photo
  validates :is_profile_photo,
            uniqueness: { scope: :author_id,
                          message: 'error: can only have 1 profile photo' },
            if: :is_profile_photo
end
