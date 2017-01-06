# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  first_name          :string           not null
#  last_name           :string           not null
#  email               :string           not null
#  session_token       :string           not null
#  password_digest     :string           not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :first_name, :last_name, presence: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, presence: true, uniqueness: true

  has_attached_file :avatar, default_url: "default_prof_pic.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :friendships
  has_many :friends, -> { Friendship.accepted }, through: :friendships
  has_many :pending_friendships, -> { Friendship.pending }, through: :friendships
  has_many :routes
  has_many :trots
  has_many :comments

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def all_friends
    ships = Friendship.select(<<-SQL)
        CASE
          WHEN user_id = #{id} THEN friend_id
          WHEN friend_id = #{id} THEN user_id
        END AS user_id
      SQL

    hips = ships.where('(user_id = :id OR friend_id = :id) AND (status = \'accepted\')', id: id)
    hips.reload

    return User.where("id IN (?)", hips.pluck(:user_id))
  end

  def potential_friends
    ships = Friendship.where("user_id = :id OR friend_id = :id", id: id)
    ids = ships.pluck(:user_id).concat(ships.pluck(:friend_id))

    return User.where.not(id: ids)
  end

  def activities
    users = self.all_friends.or(User.where(id: self.id))
    users.reload
    activities = Activity.includes({ activatable: [comments: :user] }, :user).order(created_at: :asc).where(user_id: users.pluck(:id))

    return activities
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
