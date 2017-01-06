class Api::ActivitiesController < ApplicationController

  def index
    @activities = current_user.activities
    
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
