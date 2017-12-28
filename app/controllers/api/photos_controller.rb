class Api::PhotosController < ApplicationController
  def show
    @photo = Photo.find(params[:id])
  end

  def create
    # @photo
  end

  def update
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
  end
end
