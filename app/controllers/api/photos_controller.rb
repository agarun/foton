class Api::PhotosController < ApplicationController
  before_action :require_user_logged_in,
                only: %i[create update destroy]

  def index
    if current_user
      following = current_user.following_ids + [current_user.id]
    else
      following = []
    end

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
    render json: ["Not Found"], status: :not_found if @photo.nil?
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages,
             status: :unprocessable_entity
    end
  end

  def update
    @photo = current_user.photos.find(params[:id])

    if @photo && @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages,
             status: :unprocessable_entity
    end
  end

  def destroy
    @photo = current_user.photos.find(params[:id])
    @photo.destroy
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :image)
  end
end
