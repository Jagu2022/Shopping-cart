import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Shop from './Components/Shop.jsx'
import Cart from './Components/Cart.jsx'
import {useContext} from 'react'
import {ShopContext} from './Components/Context.jsx'
import {ShopContextProvider} from './Components/Context.jsx'

import './index.css'
export default function App() {
  // const data = useContext(ShopContext)
//   console.log(data)
//   console.log('app')
  return(
    <>
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path = '/' element={<Shop/>}/>
            <Route path = '/cart' element ={<Cart/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
    )
}

