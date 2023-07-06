import React from 'react'

export default function MenuDisplay({name,price,key,aisle,handleAddCart}) {

  return (
            <tr key={key} > 
              <td>{aisle}</td> 
              <td>{name}</td>
              <td>{price}</td>
              <td><button type="click" onClick={handleAddCart}  className="btn btn-primary">Add</button></td>
            </tr>
  )
}
