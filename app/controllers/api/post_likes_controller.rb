class Api::PostLikesController < ApplicationController
    def show
        @like = PostLike.find(params[:id])
    end

    def create
        
        @like = PostLike.new()
        @like.liker_id = current_user.id
        @like.post_id = params["postLike"]["postId"].to_i
        if @like.save
            render :show
        else
            render json: @post.errors.full_messages, status: 420
        end
    end

    def destroy
        
        @like = PostLike.where(liker_id: current_user.id).where(post_id: params[:id]).first
        @like.destroy
        render :show
    end

    private

    def like_params
        
        params.require(:postLike).permit(:postId, :likerId)
    end

end
