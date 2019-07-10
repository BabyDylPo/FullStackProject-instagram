# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

pictures = [
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/babies.jpg",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/baby-cat.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/black-cat.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/blood-babe.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/burning-world.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/dog-door.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/gun-leg.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/matrix.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/peace-ocean.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/pool.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/scott.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/spellling.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/tanner.png",
    "/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/wizard-apprentice.png"
]

users = [
    User.create!({ username: 'demoUser', email: 'demoUser@aol.com', password: 'password'}),
    User.create!({ username: 'bbdylpo', email: 'dylan@dylan.com', password: 'password'}),
    User.create!({ username: 'silk', email: 'bella@hotmail.com', password: 'password'})
]

pictures.shuffle!

(0...pictures.length).each do |i|
    url = pictures[i]
    user = users.shuffle!.first
    filename = url.split("images/").last.split(".png").first
    sentence = Faker::Books::Lovecraft.unique.sentences
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence[0])
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