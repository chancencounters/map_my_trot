Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:index, :show, :create, :destroy]
    resources :trots, only: [:index, :show, :create, :destroy]
    resources :friendships, only: [:create, :destroy, :edit]
    resources :comments, only: [:create, :destroy]
  end

  get 'api/friends', :to => 'api/users#friends'
  get 'api/friendships', :to => 'api/users#friendships'
end
