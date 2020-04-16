class ApplicationController < ActionController::Base
  include ActionController::Cookies
  include Pagy::Backend

   before_action :authenticate_maneger

   private

   def authenticate_maneger
     @jwt = cookies.signed[:jwt]
     @jwt.present? ? current_maneger : unauthorized
   end

   def current_maneger
     return @current_maneger if @current_maneger

     decoded_id = JsonWebToken.decode(@jwt)
     @current_maneger = Maneger.find(decoded_id[:maneger_id])
   rescue ActiveRecord::RecordNotFound
     unauthorized
   end

   def unauthorized
     render json: { errors: 'Unauthorized' }, status: :unauthorized
   end

   def fallback_index_html
     render :file => 'public/index.html'
  end
end
