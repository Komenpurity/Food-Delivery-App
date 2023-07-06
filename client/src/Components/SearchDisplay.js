import React from 'react'

export default function SearchDisplay({key,name,url}) {
  return (
    <div key={key} className="card col-2" >  
        <img src={url}  className="card-img-top w-50"alt='im'/>  
        <div className="card-body" >
            <small className="card-title">{name} 
               </small>  
        </div>
    </div> 
  )
}
