import React from 'react'
import Rating from '@mui/material/Rating';
import ProductFilters from './ProductsFilters'

// Creating types for rating object
interface RatingTypes {
    rate: number
    count: number
}

// Creating types for shopItems prop
interface ShopItemsTypes {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: RatingTypes
    title: string
}

interface ProductsTypes {
    shopItems: ShopItemsTypes[]
    categoryFilter: string 
    showPurchaseModal: React.MouseEventHandler<HTMLDivElement>
}

const Products = ({ shopItems, categoryFilter, showPurchaseModal }: ProductsTypes) => {
  return (
    <div id='products' className='products'>
        <h1 className='productsHeader'>Shop</h1>
        <div className="productsItems container">
            <div className="prodcutsFilters">
                <ProductFilters categoryFilter={categoryFilter} />
            </div>
            {shopItems.length > 0 
            ? 
            <div className='productsDiv'>
                {shopItems.map((item, idx) => {
                    return (
                        <div onClick={() => showPurchaseModal(idx)} className='currentProducts' id={item.id.toString()} key={item.id}>
                            <div className="currentProductsImg">
                                <img src={item.image} alt="" />
                            </div>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <div className="starRatings">
                                <Rating precision={.1} readOnly={true} value={item.rating.rate} />
                                <span>({item.rating.count})</span>
                            </div>
                        </div>
                    )
                })}
            </div>
             : 
             'No Items to show'
             }
        </div>
    </div>
  )
}

export default Products