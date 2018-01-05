json.partial! 'user', user: @user

# Retrieve a user's photos when viewing their profile (show page).
if @photos
  json.photos do
    @photos.each do |photo|
      json.set! photo.id do
        json.partial! '/api/photos/photo', photo: photo
      end
    end
  end
end

cover_photo = @user.cover_photo
if cover_photo
  json.cover_photo_id cover_photo.id
  json.cover_photo_url asset_url(cover_photo.image)
  json.cover_photo_medium_url asset_url(cover_photo.image(:medium))
end
