if @users.empty?
  json.users({})
else
  json.users do
    @users.each do |user|
      json.set! user.id do
        json.partial! '/api/users/user', user: user
        cover_photo = user&.cover_photo
        json.cover_photo_url user.cover_photo.image.url(:medium) if cover_photo
        json.profile_photo_url asset_url(user.profile_photo.image.url(:thumb))
      end
    end
  end
end
