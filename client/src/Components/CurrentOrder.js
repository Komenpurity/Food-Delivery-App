import React, { useState } from 'react'

export default function CurrentOrder() {
    const[name,setName] = useState("")
    const[product,setProduct] = useState("")
    const[address,setAddress] = useState("")
    const[amount,setAmount] = useState("") 

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
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Action</th> 
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr > 
                <td>Cheesy Pizza</td>
                <td>14.99</td>
                <td>1</td>
                <td><button type="click"  className="btn btn-danger">Delete</button></td>
            </tr>

            <tr> 
            <td>Greek Pizza</td>
            <td>14.99</td>
            <td>2</td>
            <td><button type="click" className="btn btn-danger">Delete</button></td>
            </tr>

            <tr> 
            <td>Chicken Pizza</td>
            <td>15.99</td> 
            <td>1</td>
            <td><button type="click"className="btn btn-danger">Delete</button></td>
            </tr>
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
