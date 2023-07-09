class ProductsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        products = Product.all
        render json: products, status: :ok 
    end

    def show
        product = Product.find(params[:id])
        render json: product
    end

    private

    def product_params
        params.permit(:name, :price, :aisle)  
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
