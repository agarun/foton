json.extract! user, :id, :username, :bio, :location

json.follower_ids user.follower_ids
json.following_ids user.following_ids
json.current_user_follows current_user.follows?(user) if current_user

json.profile_photo_url asset_url(user.profile_photo.image(:thumb))
