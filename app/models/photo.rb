class Photo < ApplicationRecord
  include PgSearch
  # TODO: `prefix: true` for only `title`
  pg_search_scope :full_text_search_photos,
                  against: %i[title description],
                  associated_against: { tags: :name }

  belongs_to :author, class_name: :User

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_attached_file :image,
                    styles: {
                      large: "1280x1280>",
                      medium: "800x800>",
                      thumb: "100x100>"
                    }

  validates_attachment :image,
                       presence: true,
                       content_type: { content_type: /\Aimage\/.*\z/ },
                       size: { in: 0..20.megabytes },
                       unless: :is_profile_photo

  validates :is_cover_photo,
            uniqueness: { scope: :author_id,
                          message: 'error: can only have 1 cover photo' },
            if: :is_cover_photo
  validates :is_profile_photo,
            uniqueness: { scope: :author_id,
                          message: 'error: can only have 1 profile photo' },
            if: :is_profile_photo
end
