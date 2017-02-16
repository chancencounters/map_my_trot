require 'faker'

FactoryGirl.define do
  factory :comment do
    association :user, factory: :user
    association :route, factory: :route
    body { Faker::Lorem.sentence }
  end
end
