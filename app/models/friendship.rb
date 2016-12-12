class Friendship < ApplicationRecord
  validates :status, :user, :friend, presence: true
  validates_uniqueness_of :user_id, :scope => [:friend_id]
  scope :accepted, -> { where(status: :accepted) }
  scope :pending, -> { where(status: :pending) }

  belongs_to :user
  belongs_to :friend, class_name: "User", dependent: :destroy
end
