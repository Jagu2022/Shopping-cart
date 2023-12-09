import React from 'react'
// import createContext from 'react'
import {useState, useEffect} from 'react'
// import data from './Shop.jsx'


 export const ShopContext = React.createContext()
 
export const ShopContextProvider = ({children}) => {
  const url = "https://fakestoreapi.com/products"
  const [data, setData] = useState([])
  const [btn, setBtn] = useState(true)
  const [price, setPrice] = useState(0)
  const [warning, setWarning] = useState(false)
  const [itemCart, setItemCart] = useState([])
  const[load,setLoad] = useState(false)
  const[Error,setError] = useState({
    status:false, msg: 'somting went wrong'
  })
  
//fetching data from url

  const fetchApi = async(api) => {
    setLoad(true)
    setError({
    status:false, msg: 'somting went wrong'
  })
    try{
      const response = await fetch(api)
      const item = await response.json()
      setData(item)
      setLoad(false)
      setError({
      status:false, msg: 'somting went wrong'
  })
    }catch(error) {
      setLoad(false)
      setError({
      status:true, msg:'somting went wrong'
  })
    }
  }
  useEffect(() => {
    fetchApi(url)
  },[])
  
  //add to cart (item)
  
  const handleClick = (info) => {
    
    let isPresent = false 
    let amount = 1
    let newObj = {...info,amount}
    
    itemCart.forEach((prod) => {

      if(info.id === prod.id) 
        isPresent = true
    })
    if(isPresent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      },2000);
      
      return;
    }
    
    setItemCart([...itemCart,newObj])
  
  }
  
  //increase quantity & price of the product
  
  const handleAddRm = (ssh, d) => {
    let ind = -1;
    itemCart.forEach((data, index) => {
      if(data.id === ssh.id)
        ind = index
    });
    const tmpArray = itemCart;
    tmpArray[ind].amount += d;
    console.log(tmpArray[ind].amount)
    
    if(tmpArray[ind].amount === 0)
      tmpArray[ind].amount = 1;
    setItemCart([...tmpArray])
  }
  
  //remove item form cart
  
  const handleRemove = (rmId) => {
    let newItem = itemCart.filter((cartItem) => rmId !== cartItem.id );
    setItemCart(newItem)
  }
  
  //multiply price of the item
  
  const handlePrice = () => {
    let amt = 0;
    itemCart.map((item) => {
      amt+=item.amount*item.price
      console.log(amt)
    })
    setPrice(amt)
    console.log(price)
  }
  
  useEffect(() => {
    handlePrice()
  })
  
  // context providers
  
  const contextValue = {data, setItemCart, itemCart, handleClick, itemCart, btn,warning, handleRemove, price, handleAddRm,load,Error}
  
  return <ShopContext.Provider value={contextValue}>{children}
    </ShopContext.Provider>
    
  
}

