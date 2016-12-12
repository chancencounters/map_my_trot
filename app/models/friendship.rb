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

  def friends
    ships = Friendship.select(<<-SQL)
        CASE
          WHEN user_id = #{id} THEN friend_id
          WHEN friend_id = #{id} THEN user_id
        END AS user_id
      SQL

    User.where(id: ships.where('user_id = :id OR friend_id = :id', id: id))
  end
end
