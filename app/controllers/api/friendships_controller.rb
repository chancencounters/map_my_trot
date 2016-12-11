class Api::FriendShipsController < ApplicationController

  def create
    @friendship = current_user.friendships.new(friendship_params)

    if @friendship.save
      render 'api/routes/show'
    else
      render json: @friendship.errors, status: 422
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render json: {}
  end

  private

  def friendship_params
    params.require(:friendship).permit(:friend, :status)
  end
end
