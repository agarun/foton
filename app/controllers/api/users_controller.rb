class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.to_hash(true),
             status: :unprocessable_entity
    end
  end

  def show
    @user = User.find_by(username: params[:username])
    render json: ["Not Found"], status: :not_found if @user.nil?
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
