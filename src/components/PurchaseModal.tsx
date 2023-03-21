import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";


interface PurchaseModalTypes{
    newPurchaseObject: any
    closeModal: React.MouseEventHandler
    viewModal: boolean
    addToCart: React.MouseEventHandler
    addToCartMsg: boolean
}

const PurchaseModal = ({ newPurchaseObject, closeModal, viewModal, addToCart, addToCartMsg }: PurchaseModalTypes) => {

    // Check if viewModal is true if so set the body to hidden
    useEffect(() => {
        if(viewModal){
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "auto";
        }
    }, [viewModal])
    

  return (
    <div className={`purchaseModal ${viewModal ? 'showModal' : 'hideModal'}`}>
        <button onClick={closeModal} className="modalClose"><AiOutlineClose /></button>
        {viewModal && <div className="purchaseModalItems">
            <div className="purchaseModalImg">
                <img src={newPurchaseObject.image} alt="" />
            </div>
            <div className="purchaseModalAdd">
                <div className="purchaseModalRatings">
                    <Rating precision={.1} readOnly={true} value={newPurchaseObject.rating.rate} />
                    <span>({newPurchaseObject.rating.count})</span>
                </div>
                <h2>{newPurchaseObject.title}</h2>
                <h3>${newPurchaseObject.price}</h3>
                <p><MdLocalShipping /> FREE SHIPPING</p>
                <p>{newPurchaseObject.description}</p>
                <div className="addToCartDiv">
                    <button id={newPurchaseObject.id} onClick={addToCart} className='addToCart'><AiOutlineShoppingCart />  Add To Cart</button>
                </div>
                {addToCartMsg ? <h3 className='addedSuccess'><AiOutlineCheck />Item added!</h3> : ''}
            </div>
        </div>}
    </div>
  )
}

export default PurchaseModal