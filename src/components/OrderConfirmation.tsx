import React from 'react'

interface OrderConfirmationTypes {
    nameInput: string
    emailInput: string
    phoneNumberInput: string
    addressInput: string
    cardNumberInput: string
    cvcInput: string
    totalPrice: number
}

const OrderConfirmation = ({ nameInput, emailInput, phoneNumberInput, addressInput, cardNumberInput, cvcInput, totalPrice }: OrderConfirmationTypes) => {


  return (
    <div className='orderConfirmation'>
        <div className="orderConfirmationItems">
            <div className="orderConfirmationHeader">
                <h1>Thank you for your order</h1>
                <p>An email confirmation has been sent to {emailInput}</p>
            </div>
            <div className="orderConformationInfo">
                <div className="orderInfo">
                    <p>Order Number</p>
                    <p>#{Math.floor(Math.random() * 100000)}</p>
                </div>
                <div className="orderInfo">
                    <p>Order Total: </p>
                    <p>${totalPrice}</p>
                </div>
                <div className="orderInfo">
                    <p>Delivered by:</p>
                    <p>Your order will be delivered within {Math.floor(Math.random() * (10 - 1 + 1))} days!</p>
                </div>
                <div className="orderInfo">
                    <p>Delivered to: </p>
                    <div className="nameAndAddress">
                        <p>{nameInput}</p>
                        <p>{addressInput}</p>
                    </div>
                </div>
                <div className="confirmationClose">
                    <a href="">Finished</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderConfirmation