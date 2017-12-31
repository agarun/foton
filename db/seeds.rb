User.destroy_all
Photo.destroy_all

# dev

User.create!(username: "adventurer", password: "password", bio: "Everyone likes a good aventure!", location: "New York")
User.create!(username: "aaron", password: "hunter2", bio: "", location: "Brooklyn")

# prohibited usernames

User.create!(username: "discover", password: "router_hits_page_first")
User.create!(username: "about", password: "router_hits_page_first")
User.create!(username: "search", password: "router_hits_page_first")

# production

# users = [
#   User.create!(username: "adventurer", password: "password", bio: "Everyone likes a good aventure!", location: "New York"),
#   User.create!(username: "aaron", password: "hunter2", bio: "", location: "Brooklyn"),
#   User.create!(username: "Rosalia", password: "hunter2", bio: "", location: "Barcelona"),
#   User.create!(username: "Sinjin", password: "hunter2", bio: "I love fractals.", location: "Jersey"),
#   User.create!(username: "Kamasi", password: "hunter2", bio: "Jazz is like a telescope.", location: "Los Angeles"),
#   User.create!(username: "Loyle", password: "hunter2", bio: "", location: "London"),
#   User.create!(username: "Sevda", password: "hunter2", bio: "", location: "Baku"),
#   User.create!(username: "Kacy", password: "hunter2", bio: "Musician. Send me good music!", location: "Phoenix"),
#   User.create!(username: "Jane", password: "hunter2", bio: "", location: "Israel"),
#   User.create!(username: "Olafur", password: "hunter2", bio: "The greatest thing about being a musician is being in the position to inspire other people.", location: "Iceland"),
#   User.create!(username: "Ludovico", password: "hunter2", bio: "It's only when we become aware that our time is limited that we can channel our energy into truly living.", location: "Milan"),
#   User.create!(username: "Jorja", password: "hunter2", bio: "", location: "Walsall")
# ]
#
# hundred_photos = Dir.glob("*.{jpg,jpeg}")
#
# hundred_photos_attributes = [
#   ["Energy in Positano", "Positano, Italy, a village on southern Italy's Amalfi Coast"],
#   ["Sunshine"],
#   ["Bagan Temples", "Bagan, Myanmar"],
#   ["Cycle", "Aerial resort shot!"],
#   ["Vivid"],
#   ["Cerulean"],
#   ["Contrast"],
#   ["Bright Antelope", "Antelope Canyon in Arizona!"],
#   ["Aurora"],
#   ["Movement", "A sweet top-down shot of some rowers"],
#   ["Silhouette", ""],
#   ["Ice Ice"],
#   ["Crevice"],
#   ["Entrance"],
#   ["Experience"],
#   ["Crocodile Eyes", "Studies have shown that crocodile eyes are fine-tuned for lurking at the water surface to watch for prey via their \"fovea\"."],
#   ["Unique Eyes", "Girl from Basirhat, West Bengal"],
#   ["Cookies!", "Bakin' cookies."],
#   ["Warm Vibes"],
#   ["Keen Squirrel"],
#   ["Mass"],
#   ["Ants"],
#   [""],
#   ["Evergreen"],
#   ["Industrial"],
#   ["Sine"],
#   [""],
#   ["White Cliffs"],
#   ["Earth Tones"],
#   ["Winding Road"],
#   ["Cargo"],
#   ["Saturation"],
#   ["Morning"],
#   ["Rich"],
#   ["Treats and Sugar"],
#   ["Symmetry"],
#   ["Angles"],
#   [""],
#   ["City Lights"],
#   ["Dubai Skies"],
#   ["Heli Nights"],
#   [""],
#   [""],
#   [""],
#   ["Flight"],
#   ["Golden Travels"],
#   ["Pray for Prey"],
#   ["Dinner"],
#   [""],
#   ["Tradition"],
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
# hundred_photos_data = (0...num_photos_to_test).map do |n|
#   [hundred_photos[n]] + hundred_photos_attributes[n]
# end
#
# hundred_photos_data.each do |row|
#   photo = File.open(row.first)
#   Photo.create(
#     author_id: users[rand(users.size)].id,
#     title: row[1],
#     description: row[2]
#   )
# end
#
# # TODO: upload custom profile photos for seeded users
# # TODO: choose which ones will be cover photos for users
# # TODO: choose which ones will be landing photos for site
