json.partial! '/api/photos/photo', photo: @photo
json.author_name @photo.author.username
