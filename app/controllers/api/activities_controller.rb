class Api::ActivitiesController < ApplicationController

  def index
    users = current_user.all_friends.or(User.where(id: current_user.id))
    @activities = Activity.order(created_at: :desc).where(user_id: users.pluck(:id))
    
    users.reload
    render :index
  end

  def destroy
    @activity = Activity.find(params[:id])
    @activity.destroy
    render json: {}
  end

  private

  def activity_params
    params.permit(:activity).require(:activatable_id, :activatable_type)
  end
end
