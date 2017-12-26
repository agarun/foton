class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render :show
    elsif User.find_by(username: params[:user][:username])
      render json: { password: ["Invalid password! Please try again."] },
             status: :unprocessable_entity
    else
      render json: { username: ["The username you entered is incorrect."] },
             status: :unprocessable_entity
    end
  end

  def destroy
    log_out
  end
end
