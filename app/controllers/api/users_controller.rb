class Api::UsersController < ApplicationController
  def create
    @new_user = User.new(user_params)

    if @new_user.save
      log_in(@new_user)
      render :show
    else
      render json: @new_user.errors.to_hash(true),
             status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
