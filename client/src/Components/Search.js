import React, { useState } from 'react'
import SearchDisplay from './SearchDisplay'

export default function Search() {
  const[search,setSearch] = useState("")
  const[value,setValue] = useState([])

  function handleSearch(e){ 
    e.preventDefault()
    //console.log(search)  

    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&maxFat=25&number=10&apiKey=e1ffb6e25dff428c9f521caa613110e1`)
    .then(response => response.json())
    .then(data => {
     console.log(data)
      setValue(data) 
    })}

    //console.log(value.products)

  return (
    <div className='container m-4'>  
      <h6 className='display-6 text-center'>Find Meals<i className="bi bi-search"></i></h6>
        <hr/>
        <input type="text" onChange={(e) => setSearch(e.target.value)} className='form-control d-inline  w-50 m-2' placeholder="Search Meals eg.Pizza,Pasta" />
        <button type="submit" onClick={handleSearch} className="btn btn-primary">Search</button>
         
         <div className='row'>
            {value.results?.map(r => {
               return <SearchDisplay key={r.id} url={r.image}  name={r.title} />
              })} 
         </div>
            
    </div>   
  )
}
