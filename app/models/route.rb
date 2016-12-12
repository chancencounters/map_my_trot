# == Schema Information
#
# Table name: routes
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  name        :string           not null
#  distance    :float            not null
#  polyline    :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  origin      :string           not null
#  destination :string           not null
#  bounds      :json             not null
#

class Route < ApplicationRecord
  validates :user, :name, :origin, :destination, :distance, :polyline, :bounds, presence: true

  belongs_to :user
  has_many :trots
end
