Rails.application.routes.draw do
  get '/', to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create update] do
      member do
        get :followers
        get :following
        patch :follow
        delete :unfollow
      end
    end
    resources :users, only: :show, param: :username

    resource :session, only: %i[create destroy]
    resources :photos, only: %i[index show create update destroy]
    get 'search', to: 'search#query'
  end
end
