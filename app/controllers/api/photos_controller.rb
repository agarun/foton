class Api::PhotosController < ApplicationController
  before_action :require_user_logged_in, only: %i[create update destroy]

  # FIXME: N+1 queries
  # .includes(:author) ?
  def index
    @users = current_user.following + [current_user]
    @photos = Photo
      .where(author_id: current_user.following_ids + [current_user.id])
      .where.not(is_profile_photo: true)
      .order(created_at: :desc)
      .limit(3) # TODO: remove dev stuff, implement infinite scroll
  end

  def show
    @photo = Photo.find(params[:id])
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
