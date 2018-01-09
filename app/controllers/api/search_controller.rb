class Api::SearchController < ApplicationController
  def query
    if params[:type] == "photos"
      # search photos
      # if empty query, give a bunch of random pics.
      # else use the query as a search term
    elsif params[:type] == "users"
      # search users
    end
  end
end
