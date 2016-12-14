class ActivitiesController < ApplicationController

  def destroy

  end

  private

  def activity_params
    params.permit(:activity).require(:activatable_id, :activatable_type)
  end
end
