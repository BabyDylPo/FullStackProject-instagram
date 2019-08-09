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
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/14th-P.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/scott.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/black-cat-2.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/black-cat.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/civ-screen.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/deer.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/dog-door.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/donny.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/skater-ellie.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/son-of-sam.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/dylpo-selfie.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/matrix.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/stable-cat.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/ego.png"
]

dylpo_pictures = [
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/gun-leg.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/happy-cat.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/oak-park.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/painting.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/dylpo-painting.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/park-city-patrol.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/waterfall.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/bbdyl-devin.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/deer-painting.png"
]

silk_pictures = [
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/self.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/date-night.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/burning-world.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/baby-cat.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/blood-babe.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/peace-ocean.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/crystal-quing.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/babies.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/silk-selfie.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/spellling.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/tanner.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/wizard-apprentice.png",
    "https://finstagram-storage-pro.s3-us-west-1.amazonaws.com/pool.png"
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
    filename = url.split("com/").last.split(".png").first
    sentence = Faker::Movies::HitchhikersGuideToTheGalaxy.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: open(url), filename: filename)
end

(0...dylpo_pictures.length).each do |i|
    url = dylpo_pictures[i]
    user = User.find_by(username: "bbdylpo")
    filename = url.split("com/").last.split(".png").first
    sentence = Faker::Movies::VForVendetta.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: open(url), filename: filename)
end

(0...silk_pictures.length).each do |i|
    url = silk_pictures[i]
    user = User.find_by(username: "silk")
    filename = url.split("com/").last.split(".png").first
    sentence = Faker::TvShows::TwinPeaks.unique.quote
    post = Post.create!(user_id: user.id, 
                        image_url: filename, 
                        caption: sentence)
    post.photo.attach(io: open(url), filename: filename)
end
