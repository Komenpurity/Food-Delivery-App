import React, { useState } from 'react'
import MenuDisplay from './MenuDisplay'
import CoverImg from './CoverImg'
import Cart from './Cart'

export default function Menu({menu}) { 
  const[cart,setCart] = useState([])
   // console.log(menu) 

   function handleAddCart(id){
      fetch(`/products/${id}`) 
      .then((r) => r.json())
      .then((data) => {
        //console.log(data)
        addCart(data) 
      })
    }

    function addCart(data){
      setCart([...cart,data])  
      console.log(cart) 
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
           {menu?.map((r) => {  
                return <MenuDisplay handleAddCart={handleAddCart} aisle={r.aisle} id={r.id} name={r.name} price={r.price}/> 
            })} 
        </tbody>
    </table>
            <Cart cart={cart}/> 
    </div>
  )
}
