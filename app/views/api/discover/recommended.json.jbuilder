json.partial! '/api/search/photos', photos: @photos
json.partial! '/api/search/users', users: @users

json.tags do
  @tags.each do |tag|
    json.set! tag.first do
      json.photo_ids tag.last
    end
  end
end
