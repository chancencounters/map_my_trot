class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params).includes(:friendships)

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

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :avatar)
  end
end
