import { useEffect, useState } from "react";

 export function useRestaurantsItems(menuUrl){
    let [showMenu,setShowMenu] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    let fetchData = async function(){
        let data = await fetch(menuUrl)
        let json = await data.json()
        setShowMenu(json)
    }
     return showMenu
   
}