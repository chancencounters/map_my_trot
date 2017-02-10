require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has a valid factory' do
    expect(build(:user)).to be_valid
  end

  it 'is invalid without a email' do
    expect(build(:user, email: nil)).to_not be_valid
  end

  it 'is invalid without a first name' do
    expect(build(:user, first_name: nil)).to_not be_valid
  end

  it 'is invalid without a last name' do
    expect(build(:user, last_name: nil)).to_not be_valid
  end

  it 'is invalid without a session_token' do
    expect(build(:user, session_token: nil)).to_not be_valid
  end

  it 'is invalid without a password_digest' do
    expect(build(:user, password_digest: nil)).to_not be_valid
  end
end
