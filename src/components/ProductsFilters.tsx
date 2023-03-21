import React from 'react'
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { productsFilterActions } from '../store/productsFilterSlice';
import { categoryActions } from '../store/categorySlice';

interface ProductFiltersTypes {
    categoryFilter: string
}

const ProductsFilters = ({ categoryFilter }: ProductFiltersTypes) => {

    // Setup dispatch
    const dispatch = useDispatch()
    
    // Grab the filter state from store
    const filterToggle = useSelector((state: RootState) => state.filter.filter)


    // Toggle filter items
    const changeFilter = () => {
        dispatch(productsFilterActions.toggleFilter())
    }

    const changeFilterCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Grab e.target and give it a type
        const target = e.target as HTMLInputElement
        // Dispatch the target id
        dispatch(categoryActions.getNewCategory(target.id))
    }

  return (
    <div className='productsFilters'>
        <div className="productsFiltersItems">
            <div onClick={changeFilter} className="filterHeader">
                <h2>Filters</h2>
                <p><FiFilter /></p>
            </div>
            <div className={`filterItems ${filterToggle ? 'show' : 'hide'}`}>
                <button 
                className={categoryFilter == 'all' ? 'active' : 'notActive'} 
                onClick={(e) => changeFilterCategory(e)} 
                id='all'>
                    All
                </button>

                <button 
                className={categoryFilter == 'mensclothing' ? 'active' : 'notActive'} 
                onClick={(e) => changeFilterCategory(e)} 
                id='mensclothing'>
                    Men's Clothing
                </button>
                <button 
                className={categoryFilter == 'womensclothing' ? 'active' : 'notActive'} 
                onClick={(e) => changeFilterCategory(e)} 
                id='womensclothing'>
                    Women's Clothing
                </button>

                <button 
                className={categoryFilter == 'jewelry' ? 'active' : 'notActive'} 
                onClick={(e) => changeFilterCategory(e)} 
                id='jewelry'>
                    Jewelry
                </button>

                <button 
                className={categoryFilter == 'accessories' ? 'active' : 'notActive'} 
                onClick={(e) => changeFilterCategory(e)} 
                id='accessories'>
                    Accessories
                </button>

                <button 
                className={categoryFilter == 'beauty' ? 'active' : 'notActive'} 
                onClick={(e) => changeFilterCategory(e)} 
                id='beauty'>
                    Beauty
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductsFilters