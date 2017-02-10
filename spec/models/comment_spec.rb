# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  user_id          :integer          not null
#  body             :string           not null
#  commentable_id   :integer          not null
#  commentable_type :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'spec_helper'

RSpec.describe Comment, type: :model do
  # it "is not valid without a user"
  # it "is not valid without a body"
  # it "is not valid without a commentable id"
  # it "is not valid without a commentable type"
end
