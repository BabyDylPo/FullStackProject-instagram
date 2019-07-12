# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

pictures = [
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/zHmjxqQARL25pXBf6Mkswgi4",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/ynzKyyhEkWy252aPWros3RWV",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/wM8Etm9g24xdc65ZMwKZCmPV",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/vmCQWVsGDeZ1CrGYk5V8LbJd",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/tecpGKq1BsjQNHewAwCxaT1n",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/tWnuurm4sN1GkifBFiwtNbiy",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/sAoiqtVEPUAYfum6hhZRpQFf",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/rph9XjqxiLzkZms8C1CQWFQp",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/rnsT4BsoXz7tjKKM6KnijjAX",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/qXiA2ZAPW2T3mB3XVpEKqkYQ",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/oXMTPuCxmqpKwWbgk4Axj1uS",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/oHegsCC5E8mj3QYs7HwvbezH",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/kwavFGJUkpUpy2fNt84utGWJ",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/jyoA93x2QVUYzdpuMCXjAAiy",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/jCgZpgEqQJKwM1rbfo2dbdts",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/iHfELRPVq27DgNazj7RUaEfp",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/hTjyUzVtDczcj3JQB7X7JGy6",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/bWUmzFfnEetd95Mz7eT5r3SF"
]

dylpo_pictures = [
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/XEtd7ewMxnBc1QQVqSc7QvgC",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/WoYjybBAzjAyucMNgNs8MeZg",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/Qc6uuzJ4oQD14v67jMGoUJCq",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/PrJeMmLWE1j98A7C1JDZgkNo",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/PHABtbbZamfx4FQppoh7fTBD",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/MR66ha8djNes7qhgXqBsHBCf",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/LgDAvTu118XmbiLe52hqhG8j",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/LJv81Xftz879Srqg7q6t9437"
]

silk_pictures = [
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/GarPRDttkgSmvBsx3EgVohso",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/Dvk8NzR7UitkfXmkxHEghnXM",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/BGmnJqpW5bsdhBv2kAtj9VJD",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/AydS6vRknBrDXsKk1hacfeiS",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/9DXmEvi68w1zqyJM8d5Gf6Ka",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/7oVmvcVE8pDfxQQhMMRd5vCJ",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/6RiKae2vv8Hy31A1Tx43YPjW",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/5V6jNrMj6EiC9hTCcjfv8Q2M",
    "https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/4LXsHLa2ksxN1nFk42uinKJr"
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
    filename = url.split("com/").last
    sentence = Faker::Movies::HitchhikersGuideToTheGalaxy.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: File.open(url), filename: filename)
end

(0...dylpo_pictures.length).each do |i|
    url = dylpo_pictures[i]
    user = User.find_by(username: "bbdylpo")
    filename = url.split("com/").last
    sentence = Faker::Movies::VForVendetta.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: File.open(url), filename: filename)
end

(0...silk_pictures.length).each do |i|
    url = silk_pictures[i]
    user = User.find_by(username: "silk")
    filename = url.split("com/").last
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