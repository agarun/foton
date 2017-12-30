json.extract! user, :id, :username, :bio, :location
json.profile_photo_url asset_url(user.profile_photo.image(:thumb))
