class Api::V1::AuthenticationsController < ApplicationController
  skip_before_action :authenticate_maneger, only: :create

  def create
    maneger = Maneger.find_by(email: params[:email])

    if maneger&.authenticate(params[:password])
      generate_token(maneger)
      cookies.signed[:jwt] = {
        value: generate_token(maneger),
        httponly: true,
        expires: 2.hours.from_now
      }
      render json: { maneger: maneger }, status: 201
    else
      render json: { errors: 'Username or password incorrect' }, status: 404
    end
  end

  def destroy
    cookies.delete(:jwt)
    render json: {}, status: 200
  end

  def show
    render json: { maneger: current_maneger }, status: 200
  end

  private

  def generate_token(maneger)
    JsonWebToken.encode(maneger_id: maneger.id)
  end
end
