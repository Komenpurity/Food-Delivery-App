class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.string :address
      t.string :product
      t.integer :amount 
      t.integer :price

      t.timestamps
    end
  end
end
