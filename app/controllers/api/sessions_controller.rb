class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.save
      log_in(@user)
      render :show
    elsif User.find_by(username: params[:user][:username])
      render json: { password: "Invalid password." },
             status: :unprocessable_entity
    else
      render json: { username: "Invalid username." },
             status: :unprocessable_entity
    end
  end

  def destroy
    log_out
  end
end
