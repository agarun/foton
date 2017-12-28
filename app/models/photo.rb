class Photo < ApplicationRecord
  belongs_to :author, class_name: :User

  has_attached_file :image,
                    styles: { medium: "960x960>", thumb: "100x100>" },
                    default_url: "/images/:style/default.png"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates :is_cover_photo,
            uniqueness: { scope: :author_id,
                          message: 'error: can only have 1 cover photo' },
            if: :is_cover_photo
  validates :is_profile_photo,
            uniqueness: { scope: :author_id,
                          message: 'error: can only have 1 profile photo' },
            if: :is_profile_photo
end
