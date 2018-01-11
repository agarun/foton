
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

    follow = Follow.new(
      follower_id: user1.id,
      followed_id: user2.id
    )

    follow.save! if rand(2).zero?
  end
end

# hundred_photos = Dir.glob("../../../../aaron/Google Drive/Backups/Projects/Foton/hundred/*.{jpg,jpeg}")

hundred_photos = [
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/585/original/001.jpg?1515466790",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/586/original/002.jpg?1515466815",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/587/original/003.jpg?1515466822",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/588/original/004.jpg?1515466826",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/589/original/005.jpg?1515466837",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/590/original/006.jpg?1515466843",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/591/original/007.jpg?1515466864",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/592/original/008.jpg?1515466868",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/593/original/009.jpg?1515466871",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/594/original/010.jpg?1515466890",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/595/original/011.jpg?1515466897",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/596/original/012.jpg?1515466904",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/597/original/013.jpg?1515466914",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/598/original/014.jpg?1515466924",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/599/original/015.jpg?1515466930",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/600/original/016.jpg?1515466940",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/601/original/017.jpg?1515466946",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/602/original/018.jpg?1515466960",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/603/original/019.jpg?1515466967",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/604/original/020.jpg?1515466974",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/605/original/021.jpg?1515466987",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/606/original/022.jpg?1515466994",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/607/original/023.jpg?1515467000",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/608/original/024.jpg?1515467004",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/609/original/025.jpg?1515467010",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/610/original/026.jpg?1515467015",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/611/original/027.jpg?1515467021",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/612/original/028.jpg?1515467035",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/613/original/029.jpg?1515467047",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/614/original/030.jpg?1515467053",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/615/original/031.jpg?1515467060",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/616/original/032.jpg?1515467068",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/617/original/033.jpg?1515467076",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/618/original/034.jpg?1515467079",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/619/original/035.jpg?1515467087",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/620/original/036.jpg?1515467100",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/621/original/037.jpg?1515467111",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/622/original/038.jpg?1515467120",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/623/original/039.jpg?1515467131",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/624/original/040.jpg?1515467136",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/625/original/041.jpg?1515467146",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/626/original/042.jpg?1515467151",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/627/original/043.jpg?1515467179",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/628/original/044.jpg?1515467188",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/629/original/045.jpg?1515467200",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/630/original/046.jpg?1515467217",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/631/original/047.jpg?1515467234",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/632/original/048.jpg?1515467243",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/633/original/049.jpg?1515467253",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/634/original/050.jpg?1515467271",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/635/original/051.jpg?1515467280",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/636/original/052.jpg?1515467294",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/637/original/053.jpg?1515467306",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/638/original/054.jpg?1515467314",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/639/original/055.jpg?1515467324",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/640/original/056.jpg?1515467342",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/641/original/057.jpg?1515467352",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/642/original/058.jpg?1515467363",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/643/original/059.jpg?1515467369",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/644/original/060.jpg?1515467370",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/645/original/061.jpg?1515467383",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/646/original/062.jpg?1515467388",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/647/original/063.jpg?1515467390",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/648/original/064.jpg?1515467396",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/649/original/065.jpg?1515467401",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/650/original/066.jpg?1515467410",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/651/original/067.jpg?1515467415",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/652/original/068.jpg?1515467426",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/653/original/069.jpg?1515467427",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/654/original/070.jpg?1515467429",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/655/original/071.jpg?1515467431",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/656/original/072.jpg?1515467433",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/657/original/073.jpg?1515467434",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/658/original/074.jpg?1515467435",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/659/original/075.jpg?1515467441",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/660/original/076.jpg?1515467446",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/661/original/077.jpg?1515467454",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/662/original/078.jpg?1515467461",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/663/original/079.jpg?1515467462",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/664/original/080.jpg?1515467464",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/665/original/081.jpg?1515467476",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/666/original/082.jpg?1515467487",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/667/original/083.jpg?1515467489",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/668/original/084.jpg?1515467490",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/669/original/085.jpg?1515467491",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/670/original/086.jpg?1515467493",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/671/original/087.jpg?1515467494",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/672/original/088.jpg?1515467498",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/673/original/089.jpg?1515467500",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/674/original/090.jpg?1515467510",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/675/original/091.jpg?1515467511",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/676/original/092.jpg?1515467513",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/677/original/093.jpg?1515467514",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/678/original/094.jpg?1515467515",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/679/original/095.jpg?1515467524",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/680/original/096.jpg?1515467525",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/681/original/097.jpg?1515467527",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/682/original/098.jpg?1515467528",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/683/original/099.jpg?1515467529",
  "http://s3.amazonaws.com/foton-development/photos/images/000/000/684/original/100.jpeg?1515467533"
]

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
  ["rowers", "dark", "contrast", "water", "sport", "skill", "professional", "athletes", "black"],
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

hundred_photos_data.shuffle.each do |row|
  p row
  db_photo = Photo.create(
    image: File.open(row.first),
    author_id: users[rand(users.size)].id,
    title: row[1],
    description: row[2]
  )
  db_photo.image.instance_write(:file_name, File.basename(row.first).slice(0, 7))
  db_photo.save!

  row[3].each do |tag_name|
    tag = Tag.find_by(name: tag_name) || Tag.create!(name: tag_name)
    db_photo.tags << tag
  end

  db_photo.is_cover_photo = true if rand(3).zero? && User.find(db_photo.author_id).cover_photo.nil?
  db_photo.save!

  13.times do
    random_user = User.all.sample
    unless random_user.liked_photos.include?(db_photo) && rand(3).zero?
      db_photo.like(random_user)
    end
  end
end
