class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    post = @posts.first
    puts post.likers
    render :index
    # render json: post
  end

  def show
    @post = Post.find(params[:id])
    render :show
    # render json: post
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.image_url = ""
    if @post.save!
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes({
      caption: params[:post][:caption]
      })
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    render :show
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :image_url, :caption, :photo)
  end
end
