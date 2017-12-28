class Api::PhotosController < ApplicationController
  def show
    @photo = Photo.find(params[:id])
  end

  def create
  end

  def update
  end

  def destroy
  end
end
