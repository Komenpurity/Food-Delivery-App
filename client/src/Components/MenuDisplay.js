import React from 'react'

export default function MenuDisplay({name,price,key,index,handleAddCart}) {

  return (
            <tr index={index} key={key} > 
            <td>{name}</td>
            <td>{price}</td>
            <td><button type="click" onClick={handleAddCart}  className="btn btn-primary">Add</button></td>
            </tr>
  )
}
