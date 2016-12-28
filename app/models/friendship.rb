# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord
  validates :status, :user, :friend, presence: true
  validates_uniqueness_of :user_id, :scope => [:friend_id]
  scope :accepted, -> { where(status: :accepted) }
  scope :pending, -> { where(status: :pending) }

  belongs_to :user
  belongs_to :friend, class_name: "User"
  has_many :activities, as: :activatable, dependent: :delete_all
end
