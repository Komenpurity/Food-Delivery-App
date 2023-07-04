import React from 'react'
import MealsImage from "../../assets/food.jpg"; 

export default function MealImg() {
  return (
    <div >
        <img className="card-img-top img-thumbnail w-100 p-10" src={MealsImage} alt="A table Od Delicous Food" /> 
    </div>
  )
}
