import React from 'react'

export default function MenuDisplay({name,price,id,aisle,handleAddCart}) {

  return (
            <tr key={id} > 
              <td>{aisle}</td> 
              <td>{name}</td>
              <td>{price}</td>
              <td><button type="click" onClick={() => handleAddCart(id)}  className="btn btn-primary">Add</button></td>
            </tr>
  )
}
