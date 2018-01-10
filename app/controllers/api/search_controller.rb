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
      Photo.order("RANDOM()").where(is_profile_photo: false).limit(10)
    else
      Photo.full_text_search_photos(params[:query])
    end
  end

  def user_query
    if params[:query].empty?
      User.order("RANDOM()").limit(12)
    else
      User.full_text_search_users(params[:query])
    end
  end
end
