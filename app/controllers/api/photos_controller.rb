class Api::PhotosController < ApplicationController
  before_action :require_user_logged_in, only: %i[create update destroy]

  def index
    following = current_user.following_ids + [current_user.id]
    @users = User
      .includes(:followers, :following, :photos, :profile_photo)
      .where(id: following)
    @photos = Photo
      .where(author_id: following)
      .where.not(is_profile_photo: true)
      .order(created_at: :desc)
      .limit(5) # FIXME
  end

  def show
    @photo = Photo.includes(:author).find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :image)
  end
end
