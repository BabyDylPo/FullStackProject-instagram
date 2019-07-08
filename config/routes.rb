Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] do
      resources :posts, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:show]
  end

  root "static_pages#root"
end
