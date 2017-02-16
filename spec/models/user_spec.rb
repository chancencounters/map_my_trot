require 'rails_helper'

RSpec.describe User, type: :model do
  subject { build(:user, email: "test@gmail.com", password: "123456") }

  it 'has a valid factory' do
    expect(subject).to be_valid
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

  before do
    subject.save!
  end

  describe '#find_by_credentials' do
    context 'given good credentials' do
      it 'should return correct user' do
        found_user = User.find_by_credentials("test@gmail.com", "123456")
        expect(subject).to eq(found_user)
      end
    end
  end

  describe '.valid_password' do
    context 'given valid password' do
      it 'should return true' do
        expect(subject.valid_password?("123456")).to eq true
      end

    context 'should return false' do
      it 'should return false' do
        expect(subject.valid_password?("12346")).to eq false
      end
    end
    end
  end

  describe '.reset_token!' do
    it 'should reset session token' do
      old_token = subject.session_token
      new_token = subject.reset_token!

      expect(old_token).not_to eq(new_token)
    end
  end
end
