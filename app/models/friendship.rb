class Friendship < ApplicationRecord
  validates :user,  uniqueness: { scope: :friend }
  validates :status, :user, :friend, presence: true
  scope :accepted, -> { where(status: :accepted) }
  scope :pending, -> { where(status: :pending) }

  belongs_to :user
  belongs_to :friend, class_name: "User", dependent: :destroy

end
