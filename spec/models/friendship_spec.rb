require 'spec_helper'

RSpec.describe Friendship, type: :model do
  describe 'validations' do
    setup { @user = build(:user); @friend = build(:user)}
    subject { Friendship.create(user: @user, friend: @friend, status: "pending") }

    it { is_expected.to validate_presence_of(:status) }
    it { is_expected.to validate_presence_of(:user) }
    it { is_expected.to validate_presence_of(:friend) }
    it {
      is_expected.to validate_uniqueness_of(:user_id).scoped_to(:friend_id)
    }
  end

  describe 'associations' do
    it { should have_many(:activities) }
    it { should have_many(:comments) }
    it { should belong_to(:user) }
    it { should belong_to(:friend) }
  end
end
