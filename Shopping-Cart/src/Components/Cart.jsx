import {ShopContext} from './Context.jsx'
import {useState, useEffect, useContext} from 'react'

export default function Cart() {
  const {itemCart, data, price, handleAddRm, handleRemove} = useContext(ShopContext)
const [item] = itemCart
 console.log(itemCart)
  return(
    <div>
    <h1>Cart</h1>
    <h3 className='total'>Total: {price}</h3>
    <div className='cart-Cintainer'>
      {
        itemCart.map((eachItem) => (
        
          <div className='cartMenu' key={eachItem.id}>
            <img src={eachItem.image}/>
            <h4>{eachItem.title}</h4>
            <h4><i>price: $ {eachItem.price}</i></h4>
            
            <div className='spanDiv'>
              <span><button onClick={() => handleAddRm(eachItem, -1)}>-</button></span>
              <span className='quantity'>Quantity: {eachItem.amount}</span>
              <span><button onClick={() => handleAddRm(eachItem, +1)}>+</button></span>
            </div>
            
            <div className='rm-btnDiv'>
              <button className='rm-btn' onClick ={() => handleRemove(eachItem.id)}>Remove From Cart</button>
            </div>
            
          </div>
          )
        )
      }
    </div>
    </div>
    )
}
