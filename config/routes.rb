Rails.application.routes.draw do
  root to: 'homes#index'
  resources :homes,only: [:inedx]
  resources :cafes,only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
