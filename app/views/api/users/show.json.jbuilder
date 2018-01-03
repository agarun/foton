json.partial! 'user', user: @user

# Retrieve a user's photos when viewing their profile (show page).
json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.partial! '/api/photos/photo', photo: photo
    end
  end
end
