import React from 'react'
import MenuDisplay from './MenuDisplay'
import CoverImg from './CoverImg'

export default function Menu({menu}) { 
   // console.log(menu.ingredients) 

   function handleAddCart(id){
    fetch(`https://private-anon-ce41ed15ac-pizzaapp.apiary-mock.com/restaurants/2/menu`)
   }

  return (
    <div className='container p-1'>
      <CoverImg />
    <h6 className='display-6 text-center'>Groceries</h6>   
    <hr/>
    <table className="table table-striped table-bordered">
        <thead>
            <tr>
            <th>Aisle</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th> 
            <th></th>
            </tr>
        </thead>
        <tbody>
        {menu.extendedIngredients?.map((r) => {  
                return <MenuDisplay handleAddCart={handleAddCart} aisle={r.aisle} key={r.id} name={r.name} price={r.amount}/> 
            })} 
        </tbody>
    </table>
    </div>
  )
}
