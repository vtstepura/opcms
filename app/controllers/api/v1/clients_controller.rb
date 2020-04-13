class Api::V1::ClientsController < ApplicationController

  def index
    data = Client.all.includes(:history).order! 'created_at DESC'

    pagy, clients = pagy(
      data,
      items: 10,
      page: params[:page] || 1
    )

    serializer = ClientSerializer.new(clients)

    render json: { response: serializer, pagy: pagy }
  end

  def create
    client = Client.new(client_params)

    if client.save
      render json: ClientSerializer.new(client), status: 201
    else
      render json: client.errors, status: 422
    end
  end

  def update
    client = Client.find(params[:id])

    client.update(client_params)
  end

  def show
    client = Client.find(params[:id])

    render json: ClientSerializer.new(client) if client.present?
  end

  def destroy
    client = Client.find(params[:id])

    render json: ClientSerializer.new(client), status: 202 if client.destroy
  end

  private

  def client_params
    params.require(:client).permit(
      :name,
      :project,
      :department,
      :estimate,
      :budget,
      :start_date,
      :color
    )
  end
end
