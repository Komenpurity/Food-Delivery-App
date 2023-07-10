import React from 'react'
import CartDisplay from './CartDisplay'

export default function Cart({cart}) { 
  return (
    <div className=''> 
        <h5 className='p-2'>Cart <i className="bi bi-cart"></i></h5>

        <table className="table table-striped table-bordered">
        <thead>
            <tr>
            <th>Aisle</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
          {cart?.map(r => {
              return <CartDisplay aisle={r.aisle} id={r.id} name={r.name} price={r.price}/>
            })}
        </tbody>
    </table>
    </div>

    
  )
}
