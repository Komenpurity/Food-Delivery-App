import React, { useEffect, useState } from 'react'
import Menu from './Menu'

export default function Home() {
    const [menu,setMenu] = useState([])

    useEffect(() => {
        fetch("/products")
        .then(response => response.json()) 
        .then(data => {
            //console.log(data)
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
