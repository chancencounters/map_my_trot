# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
zack = User.create!(first_name: "Zack", last_name: "Yu", email: "demo_account@admin.com", password: "password")
michael = User.create!(first_name: "Michael", last_name: "Blue", email: "blue@gmail.com", password: "password")
lucy = User.create!(first_name: "Lucy", last_name: "white", email: "lucy@gmail.com", password: "password")
irene = User.create!(first_name: "Irene", last_name: "Grigio", email: "iamireneYu@gmail.com", password: "password")
fabio = User.create!(first_name: "Fabio", last_name: "Pinot", email: "fabbbio@gmail.com", password: "password")
max = User.create!(first_name: "Max", last_name: "Hempfling", email: "max@gmail.com", password: "password")
bruce = User.create!(first_name: "Bruce", last_name: "Want", email: "bruce@gmail.com", password: "password")

Friendship.create!(user: zack, friend: michael, status: 'accepted')
Friendship.create!(user: zack, friend: lucy, status: 'accepted')
Friendship.create!(user: zack, friend: irene, status: 'pending')
Friendship.create!(user: zack, friend: fabio, status: 'pending')
Friendship.create!(user: bruce, friend: zack, status: 'pending')
Friendship.create!(user: max, friend: zack, status: 'pending')


# User.create!(
# first_name: Faker::Name.first_name,
# last_name: Faker::Name.last_name,
# avatar: Faker::Avatar.image,
# email: Faker::Internet.email,
# password: Faker::Internet.password(6),
# )




Route.destroy_all
