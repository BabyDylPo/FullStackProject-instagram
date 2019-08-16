class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render "api/users/index"
    end
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422 #what status is this? should this be here?
        end
    end
    def show
        @user = User.find(params[:id])
        render "api/users/show"
        # render json: user
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email) #could probably permit more!!!!!
    end
end
