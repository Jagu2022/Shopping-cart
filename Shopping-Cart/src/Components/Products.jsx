import {useContext} from 'react'
import {ShopContext} from './Context.jsx'
export default function Product({info}) {
  const {allItem,id, price, image, description, title} = info
  const {data, handleClick, btn,warning} = useContext(ShopContext)

  return(
    <>
     <div key={id}>
      <div className="card">
        <img src={image}/>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4><i>price: $ {price}</i></h4>
        {btn ?  (
            <button className='card-btn' onClick={() => handleClick(info)}>Add To Cart </button>) :(
            <button>Remove</button>
            )
        }
      </div>
    </div>
    </>
    )
}

