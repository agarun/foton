class Api::DiscoverController < ApplicationController
  EDITORS_CHOICE_PHOTOS = [
    "003.jpg",
    "005.jpg",
    "007.jpg",
    "011.jpg",
    "012.jpg",
    "016.jpg",
    "027.jpg",
    "033.jpg",
    "041.jpg",
    "046.jpg",
    "047.jpg",
    "060.jpg",
    "084.jpg",
  ].freeze

  def recommended
    @users = popular_users

    all_plucked_tags_photo_ids = []
    @tags = popular_tags.map do |tag|
      current_tag_photo_ids = tag.photo_ids
      all_plucked_tags_photo_ids += current_tag_photo_ids[0..7]
      [tag.name, current_tag_photo_ids[0..7]]
    end

    @photos = Photo
      .includes(:tags, :author)
      .where(id: all_plucked_tags_photo_ids)

    render :recommended
  end

  def popular_users
    User
      .includes(
        :cover_photo,
        :profile_photo,
        :following,
        :followers
      )
      .left_joins(:followers)
      .group(:id)
      .order('COUNT(followers_users.id) DESC')[0..9]
      .shuffle[0..4]
  end

  def popular_tags
    Tag
      .left_joins(:photos)
      .group(:id)
      .order('COUNT(photos.id) DESC')[0..7]
      .shuffle[0..3]
  end

  def editors_choice
    @photos = EDITORS_CHOICE_PHOTOS
      .reduce([]) do |photos, image_file_name|
        photos << Photo
          .includes(:taggings, :tags, :author)
          .find_by(image_file_name: image_file_name)
      end

    render :editors_choice
  end
end
