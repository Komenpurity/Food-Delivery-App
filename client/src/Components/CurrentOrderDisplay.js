import React from 'react'

export default function CurrentOrderDisplay({product_id,handleDelete,id,address,price,product,amount}) {
  return (
         <tr key={id}>   
            <td>{product_id}</td>
            <td>{address}</td>
            <td>{product}</td>
            <td>{amount}</td>
            <td>{price}</td>
            <td><button type="click" onClick={() => handleDelete(id)}  className="btn btn-danger">Delete</button></td>
         </tr>
  )
}
