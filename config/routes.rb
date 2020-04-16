Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :clients
      resources :history
      resources :authentications, only: :create
      resource  :authentications, only: %i[show destroy]
    end
  end
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
