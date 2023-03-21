import React, { useEffect, useState } from 'react'
import { addToCartActions } from '../store/addToCartSlice'
addToCartActions
import { useDispatch, useSelector } from 'react-redux';
import { incrementCartActions } from '../store/incrementCartSlice';
import { RootState } from '../store';
import { totalPriceActions } from '../store/totalPriceSlice';

interface RatingTypes {
  rate: number
  count: number
}

interface CartPropsTypes {
  category: string
  description: string
  id: number
  image: string
  price: number
  removeId: number
  rating: RatingTypes
  title: string
}

interface CartProps {
  cartItems: CartPropsTypes[]
  viewCart: boolean
  showFinalCheckout: React.MouseEventHandler
}

const Cart = ({ cartItems, viewCart, showFinalCheckout }: CartProps) => {
  // Bring in the total from store
  const total = useSelector((state: RootState) => state.total.total)

  // Set up dispatch
  const dispatch = useDispatch()

  // Each time cartItems change, run changeTotalPrice
  useEffect(() => {
    changeTotalPrice()
  }, [cartItems])

  // Add to the total price
  const changeTotalPrice = () => {
    let sumPrice = 0
    cartItems.forEach((item) => {
      sumPrice = sumPrice + item.price
    })
    dispatch(totalPriceActions.setTotal(sumPrice))
  }
  
  // Remove Item from Cart
  const removeItem = (e: any) => {
    dispatch(addToCartActions.removeItem(e.target.id))

    // Decrement the total cart items 
    dispatch(incrementCartActions.decrementCartCount())
  }

  return (
    <div className={`cart ${viewCart ? 'showCart' : 'hideCart'}`}>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? <div className="cartItems">
        {cartItems.map((item, idx) => {
          return (
            <div key={idx} className='cartItemsParent'>
              <div className="cartItemImg">
                <img src={item.image} alt="" />
              </div>
              <div className="cartItemText">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button id={item.removeId.toString()} onClick={(e) => removeItem(e)}>Remove Item</button>
              </div>
            </div>
          )
        })}
          <div className="total">
            <h3>Total: ${total}</h3>
            <button onClick={showFinalCheckout}>Checkout</button>
          </div>
      </div> : <h3 className='emptyCart'>No Items In Cart!</h3>}
      
    </div>
  )
}

export default Cart