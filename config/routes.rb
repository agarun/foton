Rails.application.routes.draw do
  get '/', to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: %i[create destroy]
    resources :photos, only: %i[show create update destroy]
  end
end
