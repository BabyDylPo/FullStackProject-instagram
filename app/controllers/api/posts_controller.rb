class Api::PostsController < ApplicationController
  def index
    post = User.find(params[:user_id]).post
    render :index
    # render json: post
  end

  def show
    post = Post.find(params[:id])
    render :show
    # render json: post
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    render :show
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :image_url, :caption)
  end
end
