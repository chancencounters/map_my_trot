class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render :index
  end

  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy

  end

  private
  def comment_params
    params.require(:comment).permit(:body, :commentable_id, :commentable_type)
  end
end
