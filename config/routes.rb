Rails.application.routes.draw do
  get '/', to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create do
      member do
        patch :follow
        delete :unfollow
      end
    end
    resources :users, only: :show, param: :username

    resource :session, only: %i[create destroy]
    resources :photos, only: %i[show create update destroy]
    resource :follows, only: %i[create destroy] # TODO
  end
end
