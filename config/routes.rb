Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:show, :create] 
  post "/login", to: "sessions#create" 

  resources :products, only: [:index,:show]  
  resources :orders, only: [:index,:create,:show,:destroy]
  resources :carts, only: [:index,:show]     
end 
