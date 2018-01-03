json.extract! user, :id, :username, :bio, :location
json.profile_photo_url asset_url(user.profile_photo.image(:thumb))
json.photo_ids user.photo_ids
json.follower_ids user.follower_ids
json.following_ids user.following_ids
json.current_user_follows current_user.follows?(user) if current_user
