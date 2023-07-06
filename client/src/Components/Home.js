import React, { useEffect, useState } from 'react'
import Menu from './Menu'

export default function Home() {
    const [menu,setMenu] = useState([])

    useEffect(() => {
        fetch("https://api.spoonacular.com/recipes/1003464/priceBreakdownWidget.json?apiKey=e1ffb6e25dff428c9f521caa613110e1")
        .then(response => response.json()) 
        .then(data => {
           // console.log(data)
            setMenu(data) 
        }) 
    },[] 
    )


  return (
    <div>
        <Menu menu={menu}/> 
    </div>
  )
}
