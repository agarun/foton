class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :author_id, null: false
      t.string :title
      t.text :description
      t.boolean :is_cover_photo, default: false
      t.boolean :is_profile_photo, default: false

      t.timestamps
    end

    add_index :photos, :author_id
    add_index :photos, :is_cover_photo, where: "is_cover_photo"
    add_index :photos, :is_profile_photo, where: "is_profile_photo"

    change_column :users, :bio, :text
  end
end
