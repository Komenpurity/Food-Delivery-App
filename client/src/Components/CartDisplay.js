import React from 'react'

export default function CartDisplay({name,price,id,aisle}) {
  return (
            <tr key={id} > 
              <td>{aisle}</td>  
              <td>{name}</td>
              <td>{price}</td> 
            </tr>
  )
}
