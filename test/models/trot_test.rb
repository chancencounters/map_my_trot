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

require 'test_helper'

class TrotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
