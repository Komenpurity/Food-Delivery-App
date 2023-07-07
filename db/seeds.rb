require 'rest-client'

def best_food_secret_key
    ENV["SPOONACULAR_KEY"]
end 

def news_dataset
    api_data = { key: best_food_secret_key } 
    products = RestClient.get("https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=#{api_data[:key]}")
   products_array = JSON.parse(products)["extendedIngredients"] 
   #puts(products_array) 
   products_array.each do |s| 
        Product.create(name: s["name"], price: s["amount"], aisle: s["aisle"])
    end
end
news_dataset()


puth = User.create(username: 'Puth',password_digest:'1234')
purity = User.create(username: 'Purity',password_digest: '1234') 
order1 = Order.create(product_id: 1,address: '254Kenya',product: 'Pizza',amount: 1,price: 14.99)
order2 = Order.create(product_id: 2, address: '23Kayo', product: 'Pasta',amount: 2,price: 20.64) 


