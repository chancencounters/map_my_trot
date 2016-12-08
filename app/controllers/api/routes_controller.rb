class RoutesController < ApplicationController

  def index
    @routes = current_user.routes
    render :index
  end

  def show
    @route = Route.find(params[:id])
    render :show
  end

  def create
    @route = current_user.routes.new(route_params)
    
    if @routes.save
      render :show
    else
      render json: @routes.errors.full_messages, status: 404 unless signed_in?
    end
  end

  def destroy
    render json: {}
  end

  private
  def route_params
    params.require(:route).permit(:name, :distance, :map_info)
  end
end
