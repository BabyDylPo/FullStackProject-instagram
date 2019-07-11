# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

pictures = [
    "s3://finstagram-storage-dev/4LXsHLa2ksxN1nFk42uinKJr",
    "s3://finstagram-storage-dev/5V6jNrMj6EiC9hTCcjfv8Q2M",
    "s3://finstagram-storage-dev/6RiKae2vv8Hy31A1Tx43YPjW",
    "s3://finstagram-storage-dev/7oVmvcVE8pDfxQQhMMRd5vCJ",
    "s3://finstagram-storage-dev/9DXmEvi68w1zqyJM8d5Gf6Ka",
    "s3://finstagram-storage-dev/AydS6vRknBrDXsKk1hacfeiS",
    "s3://finstagram-storage-dev/BGmnJqpW5bsdhBv2kAtj9VJD",
    "s3://finstagram-storage-dev/Dvk8NzR7UitkfXmkxHEghnXM",
    "s3://finstagram-storage-dev/GarPRDttkgSmvBsx3EgVohso",
    "s3://finstagram-storage-dev/LJv81Xftz879Srqg7q6t9437",
    "s3://finstagram-storage-dev/LgDAvTu118XmbiLe52hqhG8j",
    "s3://finstagram-storage-dev/MR66ha8djNes7qhgXqBsHBCf",
    "s3://finstagram-storage-dev/PHABtbbZamfx4FQppoh7fTBD",
    "s3://finstagram-storage-dev/PrJeMmLWE1j98A7C1JDZgkNo",
    "s3://finstagram-storage-dev/Qc6uuzJ4oQD14v67jMGoUJCq",
    "s3://finstagram-storage-dev/WoYjybBAzjAyucMNgNs8MeZg",
    "s3://finstagram-storage-dev/XEtd7ewMxnBc1QQVqSc7QvgC"
]

dylpo_pictures = [
    "s3://finstagram-storage-dev/bWUmzFfnEetd95Mz7eT5r3SF",
    "s3://finstagram-storage-dev/hTjyUzVtDczcj3JQB7X7JGy6",
    "s3://finstagram-storage-dev/iHfELRPVq27DgNazj7RUaEfp",
    "s3://finstagram-storage-dev/jCgZpgEqQJKwM1rbfo2dbdts",
    "s3://finstagram-storage-dev/jyoA93x2QVUYzdpuMCXjAAiy",
    "s3://finstagram-storage-dev/kwavFGJUkpUpy2fNt84utGWJ",
    "s3://finstagram-storage-dev/oHegsCC5E8mj3QYs7HwvbezH",
    "s3://finstagram-storage-dev/zHmjxqQARL25pXBf6Mkswgi4"
]

silk_pictures = [
    "s3://finstagram-storage-dev/qXiA2ZAPW2T3mB3XVpEKqkYQ",
    "s3://finstagram-storage-dev/rnsT4BsoXz7tjKKM6KnijjAX",
    "s3://finstagram-storage-dev/rph9XjqxiLzkZms8C1CQWFQp",
    "s3://finstagram-storage-dev/sAoiqtVEPUAYfum6hhZRpQFf",
    "s3://finstagram-storage-dev/tWnuurm4sN1GkifBFiwtNbiy",
    "s3://finstagram-storage-dev/tecpGKq1BsjQNHewAwCxaT1n",
    "s3://finstagram-storage-dev/vmCQWVsGDeZ1CrGYk5V8LbJd",
    "s3://finstagram-storage-dev/wM8Etm9g24xdc65ZMwKZCmPV",
    "s3://finstagram-storage-dev/ynzKyyhEkWy252aPWros3RWV"
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