
User.destroy_all
Photo.destroy_all
Follow.destroy_all

# dev

users = [
  User.create!(username: "adventurer", password: "password", bio: "Everyone likes a good adventure!", location: "New York"),
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
#   User.create!(username: "adventurer", password: "password", bio: "Everyone likes a good adventure!", location: "New York"),
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
  ["Sunshine", "Sun beaming over the city."],
  ["Bagan Temples", "Bagan, Myanmar"],
  ["Cycle", "Aerial resort shot!"],
  ["Rich and Vivid", ""],
  ["Cerulean", ""],
  ["Contrast", "There's so much texture here."],
  ["Bright Antelope", "Antelope Canyon in Arizona"],
  ["Aurora", "Nature is gorgeous. These colors are gorgeous."],
  ["Movement", "A sweet top-down shot of some rowers rowin'"],
  ["Silhouette", ""],
  ["Ice Ice", ""],
  ["Crevice", "Cracking into the sunlight."],
  ["Entrance", "Incredible caves."],
  ["Experience", ""],
  ["Crocodile Eyes", "Studies have shown that crocodile eyes are fine-tuned for lurking at the water surface to watch for prey via their \"fovea\"."],
  ["Unique Eyes", "Girl from Basirhat, West Bengal"],
  ["Cookies!", "Bakin' cookies."],
  ["Warm Vibes", ""],
  ["Keen Ears", "Got 'em!"],
  ["Mass", ""],
  ["Ants", "One of those days."],
  ["", ""],
  ["Evergreen", ""],
  ["Industrial", "Panel after panel, pattern after pattern."],
  ["Sine", ""],
  ["", ""],
  ["White Cliffs", "Absolutely surreal."],
  ["Earth Tones", ""],
  ["Winding Road", ""],
  ["Cargo", "Recent drone shot."],
  ["Saturation", ""],
  ["Morning", ""],
  ["Rich", "Tastes as good as it looks"],
  ["Treats and Sugar", "Emphasis on the sugar"],
  ["Symmetry", ""],
  ["Angles", ""],
  ["", ""],
  ["City Lights", ""],
  ["Dubai Skies", ""],
  ["Heli Nights", ""],
  ["", ""],
  ["Peace", ""],
  ["", ""],
  ["Pack in Flight", ""],
  ["Golden Travels", ""],
  ["Pray for Prey", ""],
  ["Dinner", ""],
  ["Bon Appetit", ""],
  ["Tradition", ""],
  ["Health", ""],
  ["Summit", ""],
  ["Intricate", "The latest from my recent macro shots."],
  ["Antelope Ridges", ""],
  ["Firey", ""],
  ["Complementary Feathers", "These colors are ridiculous"],
  ["Rays", ""],
  ["Ink Dip", ""],
  ["Crimson", ""],
  ["Tight", ""],
  ["Desert Quads", ""],
  ["Splash", "Thread the needle"],
  ["Clear and Clean", ""],
  ["Chaos", ""],
  ["Modern Cage", ""],
  ["Layers and Shadows", ""],
  ["Curves and Depth", ""],
  ["Structure", ""],
  ["Associate", ""],
  ["Weave", "Messplatz, Switzerland"],
  ["Inset", ""],
  ["Spikes", ""],
  ["Melange", ""],
  ["Vast", ""],
  ["Brushes", ""],
  ["Trapezoidal", "Variety is key"],
  ["Neon Jellyfish", ""],
  ["", ""],
  ["Happy", ""],
  ["", ""],
  ["Hue", ""],
  ["Spring", ""],
  ["", ""],
  ["Grace", ""],
  ["Lone", ""],
  ["", "Greece"],
  ["Aerial Sports", ""],
  ["Metropolis", ""],
  ["Sundown", "Timing is everything"],
  ["", ""],
  ["Mirage", ""],
  ["Cubes", ""],
  ["Slice", ""],
  ["Industry", ""],
  ["Infinite", ""],
  ["Roamer", ""],
  ["First Light", ""],
  ["Streaks", ""],
  ["Drops", ""],
  ["Texture", ""]
]

tags = [
  ["positano", "italy", "travel", "sky", "saturation", "vibrant", "warm"],
  ["city", "skyline", "sun", "sunlight", "aerial", "drone", "fog", "orange"],
  ["bagan", "temples", "myanmar", "fog", "horizon"],
  ["amusement", "park", "saturation", "vivid", "aerial", "drone", "top-down"],
  ["resort", "terrace", "luxury", "aerial", "drone", "top-down", "vivid", "saturation"],
  ["night", "horizon", "hue", "sky", "mountains"],
  ["snow", "mountains", "contrast", "steep", "peaks"],
  ["antelope", "canyon", "streaks", "light", "arizona", "color"],
  ["aurora", "borealis", "green", "night", "neon"],
  ["rowers", "dark", "contrast", "water", "sport", "skill", "professional", "athletes", "black", "white"],
  ["cliff", "edge", "dawn", "void", "clouds", "backpacker", "contrast", "mist"],
  ["ice", "pick", "sport", "adventure", "red", "contrast", "climbing", "white"],
  ["ridge", "crevice", "mountains", "snow", "travel", "climbing"],
  ["cave", "exploring", "adventure", "entrance", "snow", "night", "mystery", "aqua", "blue"],
  ["age", "experience", "people", "old"],
  ["crocodile", "animal", "nature", "eyes", "macro"],
  ["eyes", "child", "people", "beauty", "blue"],
  ["cookies", "baking", "marble", "food"],
  ["warm", "vibes", "forest", "green", "drink", "food", "people"],
  ["animal", "nature", "green"],
  ["red", "pink", "people", "crowd", "mass", "event", "festival", "swarm"],
  ["snow", "people", "fun", "blizzard", "trees", "group", "top-down", "aerial", "drone"],
  ["animal", "nature", "ears", "focus", "bright"],
  ["mountains", "hillside", "trees", "evergreen", "snow", "peaks"],
  ["building", "architecture", "minimal", "shapes", "geometry", "angles", "clean", "design"],
  ["building", "architecture", "curves", "weave", "design"],
  ["japanese", "organization", "items"],
  ["waterfall", "cliff", "nature", "contrast", "surreal", "cold"],
  ["dark", "mystery", "cozy", "night", "home", "warm"],
  ["winding", "roads", "travel", "cars", "mountains", "drone", "top-down"],
  ["cargo", "shipment", "color", "aerial", "top-down"],
  ["ocean", "water", "beach", "nature", "vivid", "saturation"],
  ["cozy", "home", "tea", "food", "drink", "bed", "warm"],
  ["food", "cupcakes", "baking"],
  ["food", "baking", "sugar", "treats"],
  ["building", "architecture", "curves", "design", "symmetry", "light", "white", "geometry"],
  ["architecture", "sky", "angles", "curves"],
  ["night", "purple", "dark", "mountain", "water", "reflection"],
  ["city", "lights", "skyline", "horizon"],
  ["dubai", "high-rise", "city", "sunset"],
  ["city", "lights", "night", "timelapse", "aerial", "metropolis"],
  ["lake", "hill", "stars", "pale", "sky"],
  ["horse", "nature", "field", "trees", "fog", "distance"],
  ["mist", "fog", "hills", "pond", "valley"],
  ["animal", "nature", "flight", "birds"],
  ["california", "golden", "gate", "birds", "flight", "nature"],
  ["animal", "nature", "jungle", "prey"],
  ["food", "dinner", "pasta"],
  ["food", "turkey", "baku"],
  ["tradition", "food", "baku"],
  ["healthy", "eats", "food", "broccoli", "mushrooms"],
  ["peak", "mountain"],
  ["macro", "insect", "nature"],
  ["ridges", "antelope", "smooth", "warm"],
  ["fall", "autumn", "mountains", "trees", "gloomy"],
  ["animal", "nature", "parrot", "focus", "bokeh", "colorful"],
  ["rays", "light", "sun", "trees", "distance"],
  ["ink", "abstract", "art", "blue"],
  ["red", "geometry", "squares", "architecture", "layers", "shadows", "smooth", "structure"],
  ["super", "bikes", "racing", "sport", "turn", "corner", "action"],
  ["quad", "desert", "sport", "fun", "action", "sand", "yellow"],
  ["water", "abstract", "focus"],
  ["ocean", "aerial", "top-down", "drone", "clear", "waters", "sand"],
  ["time", "watches", "busy", "chaos", "mechanical"],
  ["dome", "industrial", "shadow", "curve", "architecture"],
  ["ridges", "smooth", "explore", "cave", "canyon"],
  ["architecture", "building", "industrial", "red", "panel"],
  ["arch", "architecture", "organization", "light", "shadow"],
  ["geometry", "city", "bottom-up"],
  ["weave", "architecture", "dome", "shape", "curve", "sky", "switzerland"],
  ["architecture", "building", "inset", "holes", "geometry", "design"],
  ["structure", "terrain", "curve", "spikes"],
  ["abstract", "swirl"],
  ["black", "white", "trees", "clouds", "distance", "contrast"],
  ["art", "brush", "paint", "colorful"],
  ["design", "structure", "brick", "geometry", "architecture", "building"],
  ["jellyfish", "nature", "aquarium", "blue"],
  ["peninsula", "cliffside", "travel"],
  ["flowers", "white", "vase", "clean", "minimal"],
  ["pink", "busy", "canyon"],
  ["purple", "stars", "sky", "light", "star", "mountains", "horizon"],
  ["trees", "flowers", "season", "bright", "pink"],
  ["flower", "bokeh", "focus", "pretty", "nature"],
  ["bird", "nature", "animal", "plants", "yellow"],
  ["flower", "contrast", "color"],
  ["greece", "town"],
  ["aerial", "top-down", "city", "metropolis", "drone", "saturation"],
  ["city", "warm", "brown", "busy"],
  ["city", "night", "dark", "red", "lights"],
  ["flower", "top-down", "minimal", "clean"],
  ["desert", "hills", "night", "stars"],
  ["buildings", "geometry", "shape", "design"],
  ["vertical", "church", "perspective"],
  ["industrial", "city", "buildings"],
  ["bottom-up", "city", "fog", "high-rise", "black", "white"],
  ["sand", "nomad", "adventure", "hills", "desert", "pale", "yellow"],
  ["mountains", "sunset", "valleys", "distance", "lake"],
  ["antelope", "streaks", "light", "contrast"],
  ["liquid", "abstract", "black", "white"],
  ["feathers", "animal", "nature", "blue"]
]

num_photos_to_test = 100
hundred_photos_data = (0...num_photos_to_test).map do |n|
  [hundred_photos[n]] + hundred_photos_attributes[n] + [tags[n]]
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

  row[3].each do |tag_name|
    tag = Tag.find_by(name: tag_name) || Tag.create!(name: tag_name)
    db_photo.tags << tag
  end

  db_photo.is_cover_photo = true if rand(3).zero? && User.find(db_photo.author_id).cover_photo.nil?
  db_photo.save!
end

# # TODO: upload custom profile photos for seeded users
# # TODO: choose which ones will be cover photos for users
# # TODO: choose which ones will be landing photos for site
