import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { useRestaurantsItems } from "./useReestaurantsItems"
import ListItems from "./ListItems"
import './Header.css'

function RestaurantsItems(){
    let [showMenu,setShowMenu] = useState(null)
    let [showIndex,setShowIndex] = useState(null)
    let  {Id}= useParams()
    let url = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId='
    let url1 = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
    let menuUrl = `${url}${Id}`
    let jsonData = useRestaurantsItems(menuUrl)
    console.log(jsonData)

   
    let showItems = jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    console.log(showItems)

    let items = showItems.filter(function(ele){
        return ele.card.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })
    console.log(items)
    
    let cardItems = items.map(function(ele){
        return ele?.card?.card?.itemCards
    })
    console.log(cardItems)

       
    //    let cardItems= items[0]?.card?.card?.itemCards
    //    console.log(cardItems)
    

    
    return(
        <div>
        {/* <h1>{showMenu?.name}</h1>
        <p>{showMenu?.areaName}</p>
        <p>{showMenu?.sla?.slaString}</p>
        <p>{showMenu?.avgRating}</p>
        <p>{showMenu?.city}</p> */}
           

        {/* {cardItems.map(function(ele){
        return <div>
        <h2>{ele?.card?.info?.name}</h2>
        <p>{(ele?.card?.info?.price/100)}</p>
        <p>{(ele?.card?.info?.description)}</p>

        <div/>
        <img src = {url1+ele?.card?.info?.imageId} alt='' style={{width:'150px', height:'150px'}}/>
        </div>
        
 })}   */}
 
        {/* {cardItems?.map(function(ele,index){
            console.log(index)
            let handleData =()=>{
             showIndex===index ? setShowIndex(null):setShowIndex(index)}
             console.log(showIndex)
            return <div>
               
            <ListItems item={ele}

            showItem = {index === showIndex ? true:false}
            setShowItem ={handleData}
            />
                       
                
                </div>
            })}        */}
        </div>
)}
export default RestaurantsItems