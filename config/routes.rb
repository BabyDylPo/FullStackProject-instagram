Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
