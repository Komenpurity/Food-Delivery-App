class OrdersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        orders = Order.all
        render json: orders, status: :ok 
    end

    
    def create
        orders = Order.create!(order_params) 
        render json: orders, status: :created 
    end

    def show
        order = Order.find(params[:id])
        render json: order
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy 
        head :no_content
    end

    private

    def order_params
        params.permit(:address, :product, :product_id, :amount) 
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
