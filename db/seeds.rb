require 'faker'

User.destroy_all
zack = User.create!(first_name: "Zack", last_name: "Yu", email: "demo_account@admin.com", password: "password")
michael = User.create!(first_name: "Michael", last_name: "Blue", email: "blue@gmail.com", password: "password")
lucy = User.create!(first_name: "Lucy", last_name: "white", email: "lucy@gmail.com", password: "password")
irene = User.create!(first_name: "Irene", last_name: "Grigio", email: "iamireneYu@gmail.com", password: "password")
fabio = User.create!(first_name: "Fabio", last_name: "Pinot", email: "fabbbio@gmail.com", password: "password")
max = User.create!(first_name: "Max", last_name: "Hempfling", email: "max@gmail.com", password: "password")
bruce = User.create!(first_name: "Bruce", last_name: "Want", email: "bruce@gmail.com", password: "password")
kinko = User.create!(first_name: "Kinko", last_name: "Want", email: "kinko@gmail.com", password: "password")
rob = User.create!(first_name: "Rob", last_name: "Veltman", email: "rob@gmail.com", password: "password")
daniel = User.create!(first_name: "Daniel", last_name: "Veltman", email: "daniel@gmail.com", password: "password")
megan = User.create!(first_name: "Megan", last_name: "Veltman", email: "Megan@gmail.com", password: "password")


Friendship.destroy_all
Friendship.create!(user: zack, friend: michael, status: 'pending')
# Friendship.create!(user: zack, friend: lucy, status: 'pending')
# Friendship.create!(user: irene, friend: zack, status: 'pending')
# Friendship.create!(user: fabio, friend: zack, status: 'pending')
# Friendship.create!(user: bruce, friend: zack, status: 'accepted')
# Friendship.create!(user: kinko, friend: zack, status: 'accepted')
# Friendship.create!(user: max, friend: zack, status: 'pending')
# Friendship.create!(user: rob, friend: zack, status: 'pending')


10.times do
  User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  # avatar: Faker::Avatar.image,
  email: Faker::Internet.email,
  password: Faker::Internet.password(6),
  )
end



# Route.destroy_all
# Trot.destroy_all
