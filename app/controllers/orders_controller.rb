class OrdersController < ApplicationController
    def index
        orders = Order.all
        render json: orders, status: :ok 
    end
end
