class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def friends
    @friends = current_user.friends
    Friendship.where(<<-SQL)
      SELECT
        CASE
          WHEN user_id = :id
            user_id
          WHEN friend_id = :id
            friend_id
        END as user_id
      SQL
    render :friends
  end

  def friendships
    @friendships = Friendship.includes(:user).where(user_id: current_user.id)
    render :friendships
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :avatar)
  end
end
