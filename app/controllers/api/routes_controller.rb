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

    if @route.save
      render :show
    else
      render json: @route.errors.full_messages, status: 422
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
