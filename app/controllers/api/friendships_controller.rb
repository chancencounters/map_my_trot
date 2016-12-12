class Api::FriendshipsController < ApplicationController

  def create
    @friendship = current_user.friendships.new(friendship_params)

    if @friendship.save
      render 'api/routes/show'
    else
      render json: @friendship.errors, status: 422
    end
  end

  def destroy
    @friendship = Friendship.where(user_id: params[:id], friend_id: current_user.id)
      .or.where(user_id: current_user.id, friend_id: params[:id])
    @friendship.destroy
    render json: @friendship
  end

  private

  def friendship_params
    params.require(:friendship).permit(:friend, :status)
  end
end
