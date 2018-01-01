class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def log_in(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def log_out
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
    end
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_user_logged_in
    unless current_user
      render json: ['Session expired. Please log in!'], status: :unauthorized
    end
  end
end
