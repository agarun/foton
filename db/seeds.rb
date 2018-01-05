User.destroy_all
Photo.destroy_all
Follow.destroy_all

# dev

users = [
  User.create!(username: "adventurer", password: "password", bio: "Everyone likes a good aventure!", location: "New York"),
  User.create!(username: "aaron", password: "hunter2", bio: "", location: "Brooklyn"),
  User.create!(username: "Rosalia", password: "hunter2", bio: "", location: "Barcelona"),
  User.create!(username: "Sinjin", password: "hunter2", bio: "I love fractals.", location: "Jersey"),
  User.create!(username: "Kamasi", password: "hunter2", bio: "Jazz is like a telescope.", location: "Los Angeles"),
  User.create!(username: "Loyle", password: "hunter2", bio: "", location: "London"),
  User.create!(username: "Sevda", password: "hunter2", bio: "", location: "Baku"),
  User.create!(username: "Kacy", password: "hunter2", bio: "Musician. I love music. A lot.", location: "Phoenix"),
  User.create!(username: "Jane", password: "hunter2", bio: "", location: "Israel"),
  User.create!(username: "Olafur", password: "hunter2", bio: "The greatest thing about being a musician is being in the position to inspire other people.", location: "Iceland"),
  User.create!(username: "Ludovico", password: "hunter2", bio: "It's only when we become aware that our time is limited that we can channel our energy into truly living.", location: "Milan"),
  User.create!(username: "Jorja", password: "hunter2", bio: "", location: "Walsall")
]

# dev color seeds

# 30.times do |i|
#   p = Photo.create(
#     author_id: users[rand(users.size)].id,
#     title: "Photo Number #{i}"
#   )
#   p.image = File.open(Dir.glob('../../../../aaron/Desktop/color/*.jpg').sample)
#   p.save!
#
#   p.is_cover_photo = true if rand(2).zero? && User.find(p.author_id).cover_photo.nil?
# end

# random follows

users.each do |user1|
  users.each do |user2|
    next if user1 == user2

    the_follow = Follow.new(
      follower_id: user1.id,
      followed_id: user2.id
    )

    the_follow.save! if rand(2).zero?
  end
end

# production

# users = [
#   User.create!(username: "adventurer", password: "password", bio: "Everyone likes a good aventure!", location: "New York"),
#   User.create!(username: "aaron", password: "hunter2", bio: "", location: "Brooklyn"),
#   User.create!(username: "Rosalia", password: "hunter2", bio: "", location: "Barcelona"),
#   User.create!(username: "Sinjin", password: "hunter2", bio: "I love fractals.", location: "Jersey"),
#   User.create!(username: "Kamasi", password: "hunter2", bio: "Jazz is like a telescope.", location: "Los Angeles"),
#   User.create!(username: "Loyle", password: "hunter2", bio: "", location: "London"),
#   User.create!(username: "Sevda", password: "hunter2", bio: "", location: "Baku"),
#   User.create!(username: "Kacy", password: "hunter2", bio: "Musician. I love music. A lot.", location: "Phoenix"),
#   User.create!(username: "Jane", password: "hunter2", bio: "", location: "Israel"),
#   User.create!(username: "Olafur", password: "hunter2", bio: "The greatest thing about being a musician is being in the position to inspire other people.", location: "Iceland"),
#   User.create!(username: "Ludovico", password: "hunter2", bio: "It's only when we become aware that our time is limited that we can channel our energy into truly living.", location: "Milan"),
#   User.create!(username: "Jorja", password: "hunter2", bio: "", location: "Walsall")
# ]
#
hundred_photos = Dir.glob("../../../../aaron/Google Drive/Backups/Projects/Foton/hundred/*.{jpg,jpeg}")

hundred_photos_attributes = [
  ["Energy in Positano", "Positano, Italy, a village on southern Italy's Amalfi Coast"],
  ["Sunshine"],
  ["Bagan Temples", "Bagan, Myanmar"],
  ["Cycle", "Aerial resort shot!"],
  ["Vivid"],
  ["Cerulean"],
  ["Contrast"],
  ["Bright Antelope", "Antelope Canyon in Arizona!"],
  ["Aurora"],
  ["Movement", "A sweet top-down shot of some rowers"],
  ["Silhouette", ""],
  ["Ice Ice"],
  ["Crevice"],
  ["Entrance"],
  ["Experience"],
  ["Crocodile Eyes", "Studies have shown that crocodile eyes are fine-tuned for lurking at the water surface to watch for prey via their \"fovea\"."],
  ["Unique Eyes", "Girl from Basirhat, West Bengal"],
  ["Cookies!", "Bakin' cookies."],
  ["Warm Vibes"],
  ["Keen Squirrel"],
  ["Mass"],
  ["Ants"],
  [""],
  ["Evergreen"],
  ["Industrial"],
  ["Sine"],
  [""],
  ["White Cliffs"],
  ["Earth Tones"],
  ["Winding Road"],
  ["Cargo"],
  ["Saturation"],
  ["Morning"],
  ["Rich"],
  ["Treats and Sugar"],
  ["Symmetry"],
  ["Angles"],
  [""],
  ["City Lights"],
  ["Dubai Skies"],
  ["Heli Nights"],
  [""],
  [""],
  [""],
  ["Flight"],
  ["Golden Travels"],
  ["Pray for Prey"],
  ["Dinner"],
  [""],
  ["Tradition"]
]
#   ["Health"],
#   ["Summit"],
#   ["Intricate"],
#   ["Antelope Ridges"],
#   [""],
#   ["Complementary Feathers"],
#   [""],
#   ["Ink Dip"],
#   ["Crimson Geometry"],
#   ["Tight"],
#   ["Desert Quads"],
#   ["Splash"],
#   ["Clear and Clean"],
#   ["Modern Cage"],
#   ["Layers and Shadows"],
#   ["Curves"],
#   ["Structure"],
#   ["Associate"],
#   ["Weave", "Messplatz, Switzerland"],
#   ["Inset"],
#   ["Spikes"],
#   ["Melange"],
#   ["Vast"],
#   ["Brushes"],
#   ["Trapezoidal"],
#   ["Neon Jellyfish"],
#   [""],
#   ["Happy"],
#   [""],
#   ["Hue"],
#   [""],
#   [""],
#   [""],
#   [""],
#   [""],
#   ["", "Greece"],
#   ["Metropolis"],
#   ["Sundown", "Timing is everything."],
#   [""],
#   ["Mirage"],
#   ["Cubes"],
#   ["Slice"],
#   ["Industry"],
#   ["Infinite"],
#   ["Roamer"],
#   ["First Light"],
#   ["Streaks"],
#   ["Drops"],
#   ["Texture"]
# ]
#
# num_photos_to_test = 100
num_photos_to_test = 50
hundred_photos_data = (0...num_photos_to_test).map do |n|
  [hundred_photos[n]] + hundred_photos_attributes[n]
end

hundred_photos_data.each do |row|
  puts row
  db_photo = Photo.create(
    image: File.open(row.first),
    author_id: users[rand(users.size)].id,
    title: row[1],
    description: row[2]
  )
  db_photo.save!

  db_photo.is_cover_photo = true if rand(3).zero? && User.find(db_photo.author_id).cover_photo.nil?
  db_photo.save!
end
#
# # TODO: upload custom profile photos for seeded users
# # TODO: choose which ones will be cover photos for users
# # TODO: choose which ones will be landing photos for site
