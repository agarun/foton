json.extract! photo, :id, :author_id, :title, :description
json.time_posted distance_of_time_in_words(photo.created_at, Time.now)
json.image_url photo.image.url
json.width photo.image.width
json.height photo.image.height
