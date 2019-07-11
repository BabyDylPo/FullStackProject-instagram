# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

pictures = [
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/black-cat.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/dog-door.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/gun-leg.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/matrix.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/scott.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/spellling.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/tanner.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/wizard-apprentice.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/14th-P.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/black-cat-2.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/deer.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/donny.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/ego.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/happy-cat.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/skater-ellie.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/son-of-sam.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/stable-cat.png"
]

dylpo_pictures = [
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/bbdyl-devin.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/deer-painting.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/dylpo-painting.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/dylpo-selfie.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/oak-park.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/park-city-patrol.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/self.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/waterfall.png"
]

silk_pictures = [
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/babies.jpg",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/blood-babe.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/burning-world.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/burning-world.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/crystal-quing.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/date-night.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/peace-ocean.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/baby-cat.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/silk-selfie.png"
]

users = [
    User.create!({ username: 'demoUser', email: 'demoUser@aol.com', password: 'password'}),
    User.create!({ username: 'bbdylpo', email: 'dylan@dylan.com', password: 'password'}),
    User.create!({ username: 'silk', email: 'bella@hotmail.com', password: 'password'})
]

pictures.shuffle!
dylpo_pictures.shuffle!
silk_pictures.shuffle!

(0...pictures.length).each do |i|
    url = pictures[i]
    user = users.shuffle!.first
    filename = url.split("images/").last.split(".png").first
    sentence = Faker::Movies::HitchhikersGuideToTheGalaxy.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: File.open(url), filename: filename)
end

(0...dylpo_pictures.length).each do |i|
    url = dylpo_pictures[i]
    user = User.find_by(username: "bbdylpo")
    filename = url.split("images/").last.split(".png").first
    sentence = Faker::Movies::VForVendetta.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: File.open(url), filename: filename)
end

(0...silk_pictures.length).each do |i|
    url = silk_pictures[i]
    user = User.find_by(username: "silk")
    filename = url.split("images/").last.split(".png").first
    sentence = Faker::TvShows::TwinPeaks.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: File.open(url), filename: filename)
end

# User.create!({ username: 'demoUser', email: 'demoUser@aol.com', password: 'password'})
# User.create!({ username: 'bbdylpo', email: 'dylan@dylan.com', password: 'password'})
# User.create!({ username: 'silk', email: 'bella@hotmail.com', password: 'password'})

# users = User.all
# users.each do |user|
#     post_a = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
#     post_a.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
#     post_b = Post.create!(user_id: user.id, image_url: "test photo", caption: "Throwback Tuesday")
#     post_b.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/civ-screen.png"), filename: "civ-screen.png")
# end

# post_a = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_a.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
# post_b = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_b.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
# post_c = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_c.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
# post_d = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_d.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
# post_e = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_e.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
# post_f = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_f.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
# post_g = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_g.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
# post_h = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_h.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
# post_i = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_i.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
# post_j = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
# post_j.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")