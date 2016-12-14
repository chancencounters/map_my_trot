class Api::RoutesController < ApplicationController

  def index
    @routes = current_user.routes.includes(:comments)
    render :index
  end

  def show
    @route = Route.includes(:comments).find(params[:id])
    render :show
  end

  def create
    @route = current_user.routes.includes(:comments).new(route_params)

    if @route.save
      render 'api/routes/show'
    else
      render json: @route.errors, status: 422
    end
  end

  def destroy
    @route = Route.find(params[:id])
    @route.destroy
    render json: @route.id
  end

  private

  def route_params
    params
      .require(:route)
      .permit(:name, :origin, :destination, :distance, :polyline, :bounds)
  end
end
