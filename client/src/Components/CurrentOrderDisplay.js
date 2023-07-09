import React from 'react'

export default function CurrentOrderDisplay({product_id,key,address,price,product,amount}) {
  return (
         <tr key={key}>  
            <td>{product_id}</td>
            <td>{address}</td>
            <td>{product}</td>
            <td>{amount}</td>
            <td>{price}</td>
            <td><button type="click"  className="btn btn-danger">Delete</button></td>
         </tr>
  )
}
