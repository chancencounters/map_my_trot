# == Schema Information
#
# Table name: routes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  distance   :string           not null
#  map_info   :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Route < ApplicationRecord
  validates :user, :name, :distance, :map_info, presence: true

  belongs_to :user
end
