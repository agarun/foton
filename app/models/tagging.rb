class Tagging < ApplicationRecord
  belongs_to :tag
  belongs_to :photo

  validates :tag, uniqueness: { scope: :photo }
end
