# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Post.destroy_all

# user = User.create!({ username: 'demoUser', email: 'demoUser@aol.com', password: 'password'})
# post = Post.create!(user_id: user.id, image_url: "", caption: "awdawdwawd")
# post.photo.attach(io: File.read(open("https://finstagram-storage-dev.s3-us-west-1.amazonaws.com/PrJeMmLWE1j98A7C1JDZgkNo")), filename: "PrJeMmLWE1j98A7C1JDZgkNo")
# post.save!
pictures = [
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/14th-P.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/donny.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/ego.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/gun-leg.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/matrix.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/park-city-patrol.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/skater-ellie.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/son-of-sam.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/wizard-apprentice.jpg"
]

dylpo_pictures = [
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/bbdyl-devin.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/date-night.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/deer-painting.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/deer.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/dog-door.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/dylpo-painting.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/dylpo-selfie.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/oak-park.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/painting.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/self.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/waterfall.png"
]

silk_pictures = [
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/babies.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/baby-cat.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/black-cat-2.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/black-cat.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/burning-world.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/blood-babe.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/crystal-quing.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/happy-cat.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/pool.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/silk-selfie.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/spellling.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/stable-cat.jpg",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/tanner.jpg"
]

default_pic = "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/default_profile.jpg"

users = [
    demo = User.create!({ username: 'demoUser', email: 'demoUser@aol.com', password: 'password', display_name: 'yooo ima demooo'}),
    bbd = User.create!({ username: 'bbdylpo', email: 'dylan@dylan.com', password: 'password', display_name: 'a hot potato'}),
    silk = User.create!({ username: 'silk', email: 'bella@hotmail.com', password: 'password', display_name: 'caustic grace in a burning world'})
]

demo.photo.attach(io: open(default_pic), filename: default_pic.split("com/").last.split(".jpg").first)
bbd.photo.attach(io: open(default_pic), filename: default_pic.split("com/").last.split(".jpg").first)
silk.photo.attach(io: open(default_pic), filename: default_pic.split("com/").last.split(".jpg").first)

pictures.shuffle!
dylpo_pictures.shuffle!
silk_pictures.shuffle!

(0...pictures.length).each do |i|
    url = pictures[i]
    user = users.shuffle!.first
    filename = url.split("com/").last.split(".jpg").first
    sentence = Faker::Movies::HitchhikersGuideToTheGalaxy.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: open(url), filename: filename)
end

(0...dylpo_pictures.length).each do |i|
    url = dylpo_pictures[i]
    user = User.find_by(username: "bbdylpo")
    filename = url.split("com/").last.split(".jpg").first
    sentence = Faker::Movies::VForVendetta.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: open(url), filename: filename)
end

(0...silk_pictures.length).each do |i|
    url = silk_pictures[i]
    user = User.find_by(username: "silk")
    filename = url.split("com/").last.split(".jpg").first
    sentence = Faker::TvShows::TwinPeaks.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: open(url), filename: filename)
end
