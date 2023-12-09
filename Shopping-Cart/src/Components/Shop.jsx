import {useState, useEffect, useContext} from 'react'
import Product from './Products.jsx'
import {ShopContext} from './Context.jsx'
//import {ShopContext} from './Context.jsx'
export default function Shop() {
  const {data, handleClick, itemCart,warning,load,Error} = useContext(ShopContext)
   
  console.log(Error)
  return(
    <div>
      {load && <h1>Loading...</h1>}
      {Error?.status && <h1 style={{color:'red'}}>{Error.msg}</h1>}
      {
        !load && !Error?.status &&
        <>
          <h1>Shop</h1>
  
          <div>
            {
              warning && <h3 className='warning'>Item already in your cart</h3>
            }
          </div>
          {data.map((eachItem) => {
          return <Product key={eachItem.id} info={eachItem} allItem={eachItem}/>
          })}
      </>
      }
    </div>
    )
}