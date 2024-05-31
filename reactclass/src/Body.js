import { useEffect, useState } from "react";
import Card  from "./Card";
import './Body.css'
import { Link } from "react-router-dom";
import { cardVeg } from "./Card";
import { context } from './App'
import { useContext } from "react";
export function Body(props) {
  let name = useContext(context)
  let RestaurantVeg = cardVeg(Card)
 let [searchItem,setSearchItem] = useState('')
 let [filteredData,setFilteredData]= useState([])
//  let [topRatedItems,setTopRatedItems] = useState([])
 let [listOfCards,setData] = useState([

  // let [filterData, setData] = useState([
     {
      imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jnzmscxd37rbjmgciwt5',
      title: 'Al Rabea Al Arabi Cafeteria',
      decription: 'North Indian Chinese, South Indian',
      rating: 4.4,
      price: '300 for two',
      time: '25-30 minutes'
    },
    {
      imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jnzmscxd37rbjmgciwt5',
      title: 'Al Rabea Al Arabi Cafeteria',
      decription: 'Biryani Chinese',
      rating: 4.4,
      price: '300 for two',
      time: '25-30 minutes'
    },
    {
      imgUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jnzmscxd37rbjmgciwt5',
      title: 'Al Rabea Al Arabi Cafeteria',
      decription: 'Tandoor, chinese',
      rating: 4.4,
      price: '300 for two',
      time: '25-30 minutes'
    }
  ])
  let getData = async function () {
    let listOfItems = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    let listOfItemsData = await listOfItems.json()
    let listofrestaurents = listOfItemsData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
     setFilteredData(listofrestaurents)
    setData(listofrestaurents)
  }
  useEffect(() => {
    getData()
  }, [])
 
  return (
       
  <div className='container'>
  <input type='text' placeholder='Search for restaurents and foods' onChange={function(event){
    setSearchItem(event.target.value)
  }
  }/>
  <button onClick={function(){
    let filterItems = listOfCards.filter(function(ele){
    return  ele.info.name.toUpperCase().includes(searchItem.toUpperCase())
    } 
    )
    setFilteredData(filterItems)
  }
  }>Search</button> 

<button onClick={function(){
       let topItems = filteredData.filter(function(ele){
        return ele?.info?.avgRating>4.2
       })
      //  setTopRatedItems(topItems)
       setFilteredData(topItems)
      }}>
        topRateditems
      </button>
      <h1>{name}, whats on your mind</h1>
      
    {filteredData.map(function(ele){
        return <Link to={'/restaurants/'+ele.info.id}> {ele?.info?.veg ? <RestaurantVeg item={ele}/> : <Card item={ele}/>} </Link>
    })}
          </div>
         
          
   )       
  }

export default Body
 