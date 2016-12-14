# == Schema Information
#
# Table name: trots
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  route_id    :integer          not null
#  name        :string           not null
#  description :string           not null
#  date        :date             not null
#  duration    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Trot < ApplicationRecord
  validates :user, :name, :route, :description, :date, :duration, presence: true

  belongs_to :user
  belongs_to :route
  has_many :comments, as: :commentable, dependent: :delete_all
  has_many :activities, as: :activatable, dependent: :delete_all
end
