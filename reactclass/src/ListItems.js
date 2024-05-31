import React from "react";
import { updateCart } from "./store";
import { updateCartData } from "./store";
import {  useDispatch } from "react-redux";

let ListItems = (props) =>{
    let dispatch = useDispatch()
    console.assert(dispatch)
console.log(props.setShowItem)
let {setShowItem,showItem}= props
let handleItems = ()=>{
    setShowItem()
   
}

    let url1 = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
    return( 

            <div className="container">

            <span>{props?.item?.title}({props?.item?.length})</span>
            <span onClick={()=>{
                handleItems()
            }}>⬇️</span>
            {showItem && props?.item?.map(function(ele){

         
            return <div>
                <div>
        <h1>{ele?.card?.info.name}</h1>
        <p>{(ele?.card?.info.price)/100}</p>
        <p>{ele?.card?.info.description}</p>
        </div>
        <div>
            <button className="btn btn-success btn-sm" onClick={()=>{
                dispatch(updateCartData(ele))
                dispatch(updateCart(1))

            }}>Add</button>
        <img src={`${url1}${ele?.card?.info.imageId }`} alt="" style={{height:'100px' , width:'100px'}} />
        </div>
        </div>
           })}
        </div>
        
     )}

export default ListItems