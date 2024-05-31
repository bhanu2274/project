import React from 'react'

const Card = (props) => {
  
// console.log((props?.item?.info))
let url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'

  return (

   
  <div>
    <h1>{props.name}</h1>
    < img alt = 'food' src={url+props?.item?.info?.cloudinaryImageId}/>
  <h4>{props?.item?.info?.name}</h4>
  <p>{props?.item?.info?.avgRating}</p>
  <p>{props?.item?.info?.sla?.slaString}</p>
  <p>{props?.item?.info?.cuisines[0]}</p>
  <p>{props?.item?.info?.areaName}</p>
 
   </div>
  )
}

export default Card

 export function cardVeg(Card){
    return function(props){
      return <div>
        <label>Veg</label>
        <Card {...props}/>
      </div>

    }
}

