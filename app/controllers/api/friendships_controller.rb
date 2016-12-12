class Api::FriendshipsController < ApplicationController

  def create
    @friendship = current_user.friendships.new(friendship_params)

    if @friendship.save
      render 'api/routes/show'
    else
      render json: @friendship.errors, status: 422
    end
  end

  def edit
    @friendship = Friendship.find(params[:id])
    @friendship.status = 'accepted'
    @friendship.save
    @friend = @friendship.user
    render json: { friend: @friend, friendship: @friendship }
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render json: @friendship
  end

  private

  def friendship_params
    params.require(:friendship).permit(:friend, :status)
  end
end
