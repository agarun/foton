class Api::SearchController < ApplicationController
  def query
    if params[:type] == "photos"
      if params[:query].empty?
        @photos =
          Photo.order("RANDOM()").where(is_profile_photo: false).limit(10)
      else
        # TODO: Check if this is this going to escape characters like %
        @photos = Photo
          .where(
            "title LIKE :query OR description LIKE :query",
            query: "%#{params[:query]}%"
          )
      end
      render :photos
    elsif params[:type] == "users"
      @users = User
        .where(
          "username LIKE :query",
          query: "%#{params[:query]}%"
        )
      render :users
    end
  end
end
