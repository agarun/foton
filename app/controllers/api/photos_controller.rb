class Api::PhotosController < ApplicationController
  before_action :require_user_logged_in,
                only: %i[create update destroy like unlike]

  def index
    if current_user
      following = current_user.following_ids + [current_user.id]
    else
      following = []
    end

    # TODO: persist @users between fetches, or is the load negligible?
    @users = User
      .includes(:followers, :following, :photos, :profile_photo)
      .where(id: following)
    @photos = Photo
      .where(author_id: following)
      .where.not(is_profile_photo: true)
      .order(created_at: :desc)
      .page(params[:page].to_i / 2 + 1).per(2)
  end

  def show
    @photo = Photo.includes(:author).find(params[:id])
    render json: ["Not Found"], status: :not_found if @photo.nil?
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id

    if @photo.save
      @photo.tags = build_tags(JSON.parse(params[:photo][:tags]))
      render :show
    else
      render json: @photo.errors.full_messages,
             status: :unprocessable_entity
    end
  end

  def update
    @photo = current_user.photos.find(params[:id])

    if @photo && @photo.update(photo_params)
      params[:photo][:tags] ||= {}
      @photo.tags = build_tags(params[:photo][:tags].values)
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

  def like
    photo_to_like = Photo.find(params[:id])
    photo_to_like.like(current_user)
    render partial: 'api/likes/like_data',
           locals: { liker: current_user, photo: photo_to_like }
  end

  def unlike
    photo_to_unlike = Photo.find(params[:id])
    photo_to_unlike.unlike(current_user)
    render partial: 'api/likes/like_data',
           locals: { liker: current_user, photo: photo_to_unlike }
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :image)
  end

  def build_tags(tag_data)
    tag_data.map do |tag|
      Tag.find_by(name: tag["value"]) ||
      Tag.create!(name: tag["value"])
    end
  end
end
