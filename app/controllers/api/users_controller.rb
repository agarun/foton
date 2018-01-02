class Api::UsersController < ApplicationController
  before_action :require_user_logged_in, only: %i[follow unfollow]

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

  def follow
    current_user.follow(User.find_by(params[:id]))
  end

  def unfollow
    current_user.unfollow(User.find_by(params[:id]))
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
