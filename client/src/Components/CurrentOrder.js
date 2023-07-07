import React, { useEffect, useState } from 'react'
import CurrentOrderDisplay from './CurrentOrderDisplay'

export default function CurrentOrder() {
    const[order,setOrder] = useState([]) 
    const[name,setName] = useState("")
    const[product,setProduct] = useState("")
    const[address,setAddress] = useState("")
    const[amount,setAmount] = useState("") 

    useEffect(() => {
        fetch("/orders")
        .then(response => response.json())
        .then(data => {
           console.log(data)
            setOrder(data)
        })
    },[]
    )


 function handleAddOrders(e){
    e.preventDefault()

    const formData = {
        name:name,
        amount:amount,
        product:product,
        address:address 
    }

    fetch("", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then((data) => console.log(data))
            .catch(error => console.log(error))
    
 }

  return (
    <div className='container'>
    <h5 className='display-5 text-center'>Current Orders</h5>
    <hr/>
    <table className="table table-striped table-bordered">
        <thead>
            <tr>
            <th>Product_id</th>
            <th>Address</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Action</th> 
            <th></th>
            </tr>
        </thead>
        <tbody>
           {order.map(r => {
               return  <CurrentOrderDisplay product_id ={r.product_id} address={r.address} product={r.product} amount={r.amount} price={r.price} />
            })} 
        </tbody>
    </table>

    <form className='p-4' onSubmit={handleAddOrders}> 
        <h6 className='display-6'>Place your Order</h6>
        <div class="form-group">
            <label>Customer Name</label>
            <input type="name" class="form-control" value={name} onChange={e => setName(e.target.value)}  placeholder="Enter name" />
        </div>

        <div class="form-group">
            <label>Address</label> 
            <input type="address" class="form-control" value={address} onChange={e => setAddress(e.target.value)}  placeholder="Address" />
        </div>

        <div class="form-group">
            <label>Product</label> 
            <input type="product" class="form-control" value={product} onChange={e => setProduct(e.target.value)} placeholder="Product" />
        </div>

        <div class="form-group">
            <label>Amount</label> 
            <input type="amount" class="form-control"  value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
