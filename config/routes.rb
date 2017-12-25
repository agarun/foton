Rails.application.routes.draw do
  get '/', to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
  end
end
