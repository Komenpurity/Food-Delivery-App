import React, { useState } from 'react'
import SearchDisplay from './SearchDisplay'

export default function Search() {
  const[search,setSearch] = useState("")
  const[value,setValue] = useState([])

  function handleSearch(e){ 
    e.preventDefault()
    //console.log(search)  

    fetch(`https://api.spoonacular.com/food/products/search?query=${search}&number=15&apiKey=e1ffb6e25dff428c9f521caa613110e1`)
    .then(response => response.json())
    .then(data => {
     // console.log(data)
      setValue(data) 
    })}

    //console.log(value.products)

  return (
    <div className='container m-4'>  
      <h6 className='display-6'>Find Products<i className="bi bi-search"></i></h6>
        <hr/>
        <input type="text" onChange={(e) => setSearch(e.target.value)} className='form-control d-inline  w-50 m-2' placeholder="Search Products eg.Pizza,Apple" />
        <button type="submit" onClick={handleSearch} className="btn btn-primary">Search</button>
         
         <div className='row'>
            {value.products?.map(r => {
               return <SearchDisplay key={r.id} url={r.image}  name={r.title} />
              })} 
         </div>
            
    </div>   
  )
}
