import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from './Header'
import {Body} from './Body'
import RestaurantsItems from './RestaurantsItems'
import { createContext } from 'react'
import Cart from './Cart'
// import {Help} from './Help'
// import About from './About'

// let Pname ='Bhanu'
export let context =createContext()

export default function App(){   
 let Context = context.Provider
  return(
    
     <>
    {/* <Context value={Pname}> */}
    <Header />
     <Outlet />
    {/* </Context> */}
     </>
  )
}
 export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/Offers',
        element:<h1>Offers</h1>
      },
      {
        path:'/Help',
        element:<h1>Help</h1>
      },
      {
        path:'/signout',
        element:<h1>Signout</h1>
      },
      {
        path:'/Cart',
        element:<Cart />
      },
      
      {
        path:'/restaurants/:Id',
        element:<RestaurantsItems/>
      }
      
    ]
  },


]

)