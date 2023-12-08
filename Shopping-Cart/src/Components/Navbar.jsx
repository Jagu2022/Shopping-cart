import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {ShopContext} from './Context.jsx'
import { useContext} from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  const {itemCart} = useContext(ShopContext)
  
  return(
    <div className='navDiv'>
      <nav className='navNav'>
        <NavLink to='/'><button>Shop</button></NavLink>
        <NavLink to='/cart'><button className='cartBtn'><ShoppingCartIcon/></button></NavLink>
        
      </nav>
      <h6 className='length'>{itemCart.length}</h6>
    </div>
    )
}

