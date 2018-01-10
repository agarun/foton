if photos.empty?
  json.photos({})
else
  json.photos do
    photos.each do |photo|
      json.set! photo.id do
        json.partial! '/api/photos/photo', photo: photo
        json.author_name photo.author.username
      end
    end
  end
end
