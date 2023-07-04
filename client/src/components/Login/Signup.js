import React, { useState } from 'react'

export default function Signup({onLogin}) { 
  const [email,setEmail] = useState([])
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, 
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then((user) =>{
        console.log(user)
        setEmail(user) 
      } ); 
  }

  return (
    <div className="container m-5 d-flex justify-content-center w-50">     
        <form onSubmit={handleSubmit}>
        <h5 className='display-5'>Signup</h5> 
            <div className="form-group"> 
                <label id="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id='email' value={email}   onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label id="exampleInputPassword1">Password</label>
                <input type="password" id='password' value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control"  placeholder="Password" />
            </div>
            <div className="form-group">
                <label className='d-block' id="exampleInputPassword1">Confirm Password</label>
                <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Password Confirmation"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
