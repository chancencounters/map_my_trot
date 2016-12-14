class Api::FriendshipsController < ApplicationController

  def create
    @friendship = current_user.friendships.new(friendship_params)
    @friendship.status = "pending"

    if @friendship.save
      render json: @friendship
    else
      render json: @friendship.errors, status: 422
    end
  end

  def edit
    @friendship = Friendship.find(params[:id])
    ActiveRecord::Base.transaction do
      @friendship.status = 'accepted'
      @friendship.save
      @friendship.activities.create!(user_id: current_user.id)
    end

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
    params.require(:friendship).permit(:friend_id, :status)
  end
end
