import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { AiOutlineClose } from "react-icons/ai";
import OrderConfirmation from './OrderConfirmation'


interface RatingTypes {
  rate: number
  count: number
}

interface FinalCheckoutPropsTypes {
  category: string
  description: string
  id: number
  image: string
  price: number
  removeId: number
  rating: RatingTypes
  title: string
}

interface FinalCheckoutProps {
  cartItems: FinalCheckoutPropsTypes[]
  viewFinalCheckout: boolean
  hideFinalCheckout: React.MouseEventHandler
}

const FinalCheckout = ({ cartItems, viewFinalCheckout, hideFinalCheckout }: FinalCheckoutProps) => {
  const [nameInput, setNameInput] = useState<string>('')
  const [emailInput, setEmailInput] = useState<string>('')
  const [phoneNumberInput, setPhoneNumberInput] = useState<string>('')
  const [addressInput, setAddressInput] = useState<string>('')
  const [cardNumberInput, setCardNumberInput] = useState<string>('')
  const [cvcInput, setCvcInput] = useState<string>('')
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
  const [inputError, setInputError] = useState<boolean>(false)

  const totalPrice = useSelector((state: RootState) => state.total.total)

  // Check if any fields are empty
  const changeConfirmation = () => {
    if(nameInput == '' || emailInput == '' || phoneNumberInput == '' || addressInput == '' || cardNumberInput == '' || cvcInput == ''){
      setInputError(true)
    }else{
      setShowConfirmation(true)
    }
  }


  return (
    <div className='finalCheckout'>
        {showConfirmation 
        ?
         <OrderConfirmation nameInput={nameInput} emailInput={emailInput} phoneNumberInput={phoneNumberInput} addressInput={addressInput} cardNumberInput={cardNumberInput} cvcInput={cvcInput} totalPrice={totalPrice} /> 
         :
         <div className="finalCheckoutItems">
          <div className="finalCheckoutHeader">
            <h1 className='checkout'>Checkout</h1>
            <h1>Total: ${totalPrice}</h1>
          </div>
            <div className="finalCheckoutForm">
              <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} type="text" placeholder='Name' />

              <input value={emailInput} type="text" placeholder='Email' onChange={(e) => setEmailInput(e.target.value)} />

              <input value={phoneNumberInput} type="number" placeholder='Phone Number' onChange={(e) => setPhoneNumberInput(e.target.value)} />

              <input value={addressInput} type="text" placeholder='Address' onChange={(e) => setAddressInput(e.target.value)} />

              <input value={cardNumberInput} type="number" placeholder='Card Number' onChange={(e) => setCardNumberInput(e.target.value)} />

              <input value={cvcInput} type="number" placeholder='CVC' onChange={(e) => setCvcInput(e.target.value)} />

              {inputError ? <h3 className='inputErrorMsg'>Please fill in all input fields!</h3> : ''}

              <button onClick={changeConfirmation}>Place Order</button>
            </div>
            <button onClick={hideFinalCheckout} className='finalCheckoutXBtn'><AiOutlineClose /></button>
        </div>} 
    </div>
  )
}

export default FinalCheckout