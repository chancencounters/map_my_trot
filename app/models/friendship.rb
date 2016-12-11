class Friendship < ApplicationRecord
  validates :user,  uniqueness: { scope: :friend, "Already friends" }
  validates :status, :user, :friend, presence: true
  scope :accepted, -> { where(status: :accepted) }

  belongs_to :user
  belongs_to :friend

end
