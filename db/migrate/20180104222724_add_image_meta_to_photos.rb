class AddImageMetaToPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :image_meta, :text
  end
end
