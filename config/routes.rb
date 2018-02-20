Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :user, only: [:edit, :update]
  resources :group, only: [:new, :create]
end
