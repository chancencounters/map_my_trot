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
    render :friends
  end

  def friend_requests
    @friend_requests = Friendship.includes(:user).where(status: 'pending', friend_id: current_user.id)
    render :friend_requests
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :avatar)
  end
end
