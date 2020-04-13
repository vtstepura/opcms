class Api::V1::HistoryController < ApplicationController
  def index
    client = Client.find(params[:client_id])

    history = client.history.order! 'created_at DESC'

    pagy, history = pagy(
      history,
      items: 10,
      page: params[:page] || 1
    )

    serializer = HistorySerializer.new(history)

    render json: { response: serializer, pagy: pagy }
  end

  def create
    history = History.new(history_params)

    if history.save
      render json: HistorySerializer.new(history), status: 201
    else
        render json: history.errors, status: 422
    end
  end

  private

  def history_params
    params.require(:history).permit(:action, :client_id, :date).merge(maneger_id: current_maneger.id)
  end
end
