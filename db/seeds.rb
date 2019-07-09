# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!({ username: 'demoUser', email: 'demoUser@aol.com', password: 'password'})

users = User.all
users.each do |user|
    post_a = Post.create!(user_id: user.id, image_url: "test photo", caption: "Felt cute, might delete later")
    post_a.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/test-picture.png"), filename: "test-picture.png")
    post_b = Post.create!(user_id: user.id, image_url: "test photo", caption: "Throwback Tuesday")
    post_b.photo.attach(io: File.open("/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/civ-screen.png"), filename: "civ-screen.png")
end
