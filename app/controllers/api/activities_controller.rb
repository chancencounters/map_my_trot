class Api::ActivitiesController < ApplicationController

  def index
    @activities = current_user.activities.includes(
      {activatable: [:comments]}, :user).order(
      created_at: :desc).limit(
      params[:limit].to_i * 4)
    render :index
  end

  def destroy
    @activity = Activity.find(params[:id])
    @activity.destroy
    render json: {}
  end

  private

  def activity_params
    params.permit(:activity).require(:activatable_id, :activatable_type, :limit)
  end
end
