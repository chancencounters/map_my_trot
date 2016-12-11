class Api::SessionsController < ApplicationController
  def create
    @user = User.includes(:friendships).find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render json: ["Incorrect email and password combination."], status: 404 unless signed_in?
    end
  end

  def destroy
    render json: ["User Not Found"], status: 404 unless signed_in?
    sign_out
    render json: {}
  end
end
