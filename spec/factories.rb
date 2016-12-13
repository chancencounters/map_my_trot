require 'faker'

FactoryGirl.define do
  factory :comment do
    
  end
  factory :user do
    first_name Faker::Name.first_name
    last_name Faker::Name.last_name
    avatar Faker::Avatar.image
    email Faker::Internet.email
    password Faker::Internet.password(6)
  end
end
