import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchItems";
import productsFilterSlice from "./productsFilterSlice";
import categorySlice from "./categorySlice";
import newPurchaseDataSlice from "./newPurchaseDataSlice";
import newPurchaseObjectSlice from "./newPurchaseObject";
import addToCartSlice from "./addToCartSlice";
import incrementCartSlice from "./incrementCartSlice";
import totalPriceSlice from "./totalPriceSlice";

const store = configureStore({
    reducer: {
        // State for fetching api
        fetch: fetchSlice.reducer,
        // Boolean for showing filters
        filter: productsFilterSlice.reducer,
        // Category to switch filters
        category: categorySlice.reducer,
        // Change state to show the objects being showed
        newPurchaseData: newPurchaseDataSlice.reducer,
        // Gets current object clicked
        newPurchaseObject: newPurchaseObjectSlice.reducer,
        // Current Cart
        addToCart: addToCartSlice.reducer,
        // Increment cart count
        incrementCart: incrementCartSlice.reducer,
        // Total Price
        total: totalPriceSlice.reducer
    }
})

// Root State Type
export type RootState = ReturnType<typeof store.getState>


export default store