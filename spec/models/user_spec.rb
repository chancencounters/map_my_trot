require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has a valid factory' do
    expect(build(:user)).to be_valid
  end

  describe 'validations' do
    subject { build(:user) }
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_presence_of(:last_name) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:session_token) }
    it { is_expected.to validate_presence_of(:password_digest) }
    it { is_expected.to validate_length_of(:password).is_at_least(6) }
    it {
      is_expected.to validate_uniqueness_of(:email).ignoring_case_sensitivity
    }
  end

  describe 'associations' do
    it { should have_many(:friendships) }
    it { should have_many(:friends) }
    it { should have_many(:comments) }
    it { should have_many(:routes) }
    it { should have_many(:trots) }
  end
end
