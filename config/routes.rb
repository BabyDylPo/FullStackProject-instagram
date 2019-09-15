Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :show, :create, :update, :destroy]
    resources :follows, only: [:create, :destroy]
    resources :post_likes, only: [:show, :create, :destroy]
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy, :show]
  end

  root to: 'static_pages#root'
end
