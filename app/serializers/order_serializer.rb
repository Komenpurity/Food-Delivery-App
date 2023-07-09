class OrderSerializer < ActiveModel::Serializer
  attributes :product_id, :id, :address, :product, :price, :amount

  belongs_to :product
end
