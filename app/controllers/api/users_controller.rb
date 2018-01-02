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
    user_to_follow = User.find(params[:id])
    current_user.follow(user_to_follow)
    render partial: 'api/follows/follow_data',
      locals: { follower: current_user, followed: user_to_follow }
  end

  def unfollow
    user_to_unfollow = User.find(params[:id])
    current_user.unfollow(user_to_unfollow)
    render partial: 'api/follows/follow_data',
      locals: { follower: current_user, followed: user_to_unfollow }
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
