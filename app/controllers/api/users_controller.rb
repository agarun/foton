class Api::UsersController < ApplicationController
  before_action :require_user_logged_in,
                only: %i[update follow unfollow]

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render partial: 'api/users/user', locals: { user: @user }
    else
      render json: @user.errors.to_hash(true),
             status: :unprocessable_entity
    end
  end

  def show
    @user = User.find_by(username: params[:username])

    if @user.nil?
      render json: ["Not Found"], status: :not_found
    else
      @photos = @user.photos.includes(:tags, :likers)
      render :show
    end
  end

  def update
    @user = User.find(params[:id])

    new_profile_photo = params[:user][:new_profile_photo]
    new_cover_photo_id = params[:user][:new_cover_photo_id]

    if @user && @user.update(user_params)
      if new_profile_photo
        @user.update_profile_photo(new_profile_photo)
      end

      if new_cover_photo_id
        @user.update_cover_photo(new_cover_photo_id)
      end

      render :show
    else
      render json: @user.errors.to_hash(true),
             status: :unprocessable_entity
    end
  end

  def followers
    user = User.find(params[:id])
    render partial: 'api/follows/follow_collection',
           locals: { users: user.followers }
  end

  def following
    user = User.find(params[:id])
    render partial: 'api/follows/follow_collection',
           locals: { users: user.following }
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
    params.require(:user).permit(
      :username, :password, :bio, :location
    )
  end
end
