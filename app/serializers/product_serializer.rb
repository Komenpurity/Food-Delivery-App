class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :aisle

  has_many :orders
end
