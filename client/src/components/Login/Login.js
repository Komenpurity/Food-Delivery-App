import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Signup({onLogin}) { 
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, 
        password
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
        <h5 className='display-5'>Welcome Back!</h5> 
            <div className="form-group"> 
                <label id='email'>Email address</label>
                <input type="email" className="form-control" id='email' value={email}   onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label id='password'>Password</label>
                <input type="password" id='password' value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control"  placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
