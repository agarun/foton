class Api::SearchController < ApplicationController
  def query
    if params[:type] == "photos"
      @photos = photo_query
      render :photos
    elsif params[:type] == "users"
      @users = user_query
      render :users
    end
  end

  def photo_query
    if params[:query].empty?
      @photos =
        Photo.order("RANDOM()").where(is_profile_photo: false).limit(10)
    else
      @photos = Photo
        .where(
          "title LIKE :query OR description LIKE :query",
          query: "%#{params[:query]}%"
        )
    end
  end

  def user_query
    if params[:query].empty?
      User.order("RANDOM()").limit(12)
    else
      User
        .where(
          "username LIKE :query",
          query: "%#{params[:query]}%"
        )
    end
  end
end
