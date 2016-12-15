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
Friendship.create!(user: zack, friend: lucy, status: 'pending')
Friendship.create!(user: irene, friend: zack, status: 'pending')
Friendship.create!(user: fabio, friend: zack, status: 'pending')
Friendship.create!(user: bruce, friend: zack, status: 'accepted')
Friendship.create!(user: kinko, friend: zack, status: 'accepted')
Friendship.create!(user: max, friend: zack, status: 'pending')
Friendship.create!(user: rob, friend: zack, status: 'pending')

# Comment.create!(body: Faker::Lorem.paragraph(3), user_id: michael.id, commentable_id: 1, commentable_type: "Route")
# Comment.create!(body: Faker::Lorem.paragraph(3), user_id: bruce.id, commentable_id: 1, commentable_type: "Route")
# Comment.create!(body: Faker::Lorem.paragraph(3), user_id: rob.id, commentable_id: 1, commentable_type: "Route")

r1 = Route.create!(name: "Trot Around Town", distance: 0.16, polyline: "{wtwFtpsbMlAwDzBxApAiE", origin: "229 W 22nd St, New York, NY 10011, USA", destination: destination: "142 W 21st St, New York, NY 10011, USA", bounds: "{\"south\":40.74124537760784,\"west\":-73.99890780810392,\"north\":40.74640700374776,\"east\":-73.98956299189604}", user_id: zack.id)
r2 = Route.create!(name: "Trot Around Town", distance: 0.16, polyline: "{wtwFtpsbMlAwDzBxApAiE", origin: "229 W 22nd St, New York, NY 10011, USA", destination: destination: "142 W 21st St, New York, NY 10011, USA", bounds: "{\"south\":40.74124537760784,\"west\":-73.99890780810392,\"north\":40.74640700374776,\"east\":-73.98956299189604}", user_id: zack.id)
r3 = Route.create!(name: "Trot Around Town", distance: 0.16, polyline: "{wtwFtpsbMlAwDzBxApAiE", origin: "229 W 22nd St, New York, NY 10011, USA", destination: destination: "142 W 21st St, New York, NY 10011, USA", bounds: "{\"south\":40.74124537760784,\"west\":-73.99890780810392,\"north\":40.74640700374776,\"east\":-73.98956299189604}", user_id: zack.id)
r4 = Route.create!(name: "Trot Around Town", distance: 0.16, polyline: "{wtwFtpsbMlAwDzBxApAiE", origin: "229 W 22nd St, New York, NY 10011, USA", destination: destination: "142 W 21st St, New York, NY 10011, USA", bounds: "{\"south\":40.74124537760784,\"west\":-73.99890780810392,\"north\":40.74640700374776,\"east\":-73.98956299189604}", user_id: zack.id)
r5 = Route.create!(name: "Trot Around Town", distance: 0.16, polyline: "{wtwFtpsbMlAwDzBxApAiE", origin: "229 W 22nd St, New York, NY 10011, USA", destination: destination: "142 W 21st St, New York, NY 10011, USA", bounds: "{\"south\":40.74124537760784,\"west\":-73.99890780810392,\"north\":40.74640700374776,\"east\":-73.98956299189604}", user_id: zack.id)
r6 = Route.create!(name: "Trot Around Town", distance: 0.16, polyline: "{wtwFtpsbMlAwDzBxApAiE", origin: "229 W 22nd St, New York, NY 10011, USA", destination: destination: "142 W 21st St, New York, NY 10011, USA", bounds: "{\"south\":40.74124537760784,\"west\":-73.99890780810392,\"north\":40.74640700374776,\"east\":-73.98956299189604}", user_id: zack.id)
r7 = Route.create!(name: "Trot Around Town", distance: 0.16, polyline: "{wtwFtpsbMlAwDzBxApAiE", origin: "229 W 22nd St, New York, NY 10011, USA", destination: destination: "142 W 21st St, New York, NY 10011, USA", bounds: "{\"south\":40.74124537760784,\"west\":-73.99890780810392,\"north\":40.74640700374776,\"east\":-73.98956299189604}", user_id: zack.id)
r8 = Route.create!(name: "Trot Around Town", distance: 0.16, polyline: "{wtwFtpsbMlAwDzBxApAiE", origin: "229 W 22nd St, New York, NY 10011, USA", destination: destination: "142 W 21st St, New York, NY 10011, USA", bounds: "{\"south\":40.74124537760784,\"west\":-73.99890780810392,\"north\":40.74640700374776,\"east\":-73.98956299189604}", user_id: zack.id)


10.times do |i|
  user1 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(6),
  )
end
