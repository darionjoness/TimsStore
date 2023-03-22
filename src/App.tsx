import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import FreeShippingMsg from './components/FreeShippingMsg'
import AboutUs from './components/AboutUs'
import { fetchActions } from './store/fetchItems'
import { useDispatch, useSelector } from 'react-redux'
import Products from './components/Products'
import { RootState } from './store'
import Loading from './components/Loading'
import Footer from './components/Footer'
import { newPurchaseDataActions } from './store/newPurchaseDataSlice'
import { newPurchaseObjectActions } from './store/newPurchaseObject'
import PurchaseModal from './components/PurchaseModal'
import Newsletter from './components/Newsletter'
import { addToCartActions } from './store/addToCartSlice'
import { incrementCartActions } from './store/incrementCartSlice'
import Cart from './components/Cart'
import FinalCheckout from './components/FinalCheckout'

function App() {
  const [fetchLoading, setFetchLoading] = useState<boolean>(false)
  const [viewModal, setViewModal] = useState<boolean>(false)
  const [viewCart, setViewCart] = useState<boolean>(false)
  const [addToCartMsg, setAddToCartMsg] = useState<boolean>(false)
  const [viewFinalCheckout, setViewFinalCheckout] = useState<boolean>(false)
  // Setup dispatch 
  const dispatch = useDispatch()
  // Grab the items state and set it to shopItems
  const shopItems = useSelector((state: RootState) => state.fetch.items)
  // Grab the state to filter categories
  const categoryFilter = useSelector((state: RootState) => state.category.category)
  // Grab the current filtered data
  const newPurchaseData = useSelector((state: RootState) => state.newPurchaseData.newPurchaseData)
  // Grab the current object of clicked item
  const newPurchaseObject = useSelector((state: RootState) => state.newPurchaseObject.newPurchaseObject)
  // Bring in cartItems
  const cartItems = useSelector((state: RootState) => state.addToCart.cartItems)

  // useEffect hook
  useEffect(() => {
    // Run fetchItems 
    fetchItems()
  }, [categoryFilter])

  // Create async function called fetchItems
  const fetchItems = async () => {
    setFetchLoading(true)
    // Fetch store api
    const res = await fetch('./data/ShopData.json')

    const data = await res.json()

    // Check if categoryFilter is empty or equal to all
    if(categoryFilter == '' || categoryFilter == undefined || categoryFilter == null || categoryFilter == 'all'){

      // Dispatch the date to the store
      dispatch(fetchActions.setItems(data))

      // Dispatch clicked purchase data to store
      dispatch(newPurchaseDataActions.setNewPurchaseData(data))
    }else{
      // Else filter the data to show only the ones equal to categoryFilter state
      const filterdData = data.filter((item:any) => item.category == categoryFilter)

      // Dispatc clicked purchase data to store
      dispatch(newPurchaseDataActions.setNewPurchaseData(filterdData))

      // Dispatch data to store
      dispatch(fetchActions.setItems(filterdData))
    }

    setFetchLoading(false)
  }

  // Create showPurchaseModal function
  const showPurchaseModal = (idx: any) => {
    // Dispatch the newPurchaseData object at the index of idx to the store
    dispatch(newPurchaseObjectActions.setNewPurchaseObject(newPurchaseData[idx]))

    // OPEN MODAL
    // Change viewModal state to true
    setViewModal(true)
  }

  // Close Modal
  const closeModal = () => {
    // setViewModal to false
    setViewModal(false)
    setAddToCartMsg(false)
  }

  // Add Item to cart
  const addToCart = () => {
    // Add a removeId to the object
    let newObj = {
      ...newPurchaseObject,
      removeId: Math.random() * 10000
    }

    // Dispatch item to cart
    dispatch(addToCartActions.addItem(newObj))

    // Add one to the cart count
    dispatch(incrementCartActions.incrementCartCount())

    setAddToCartMsg(true)
  }

  // Toggle Cart
  const showCart = () => {
    setViewCart(!viewCart)
  }

  // Show Final Checkout Form
  const showFinalCheckout = () => {
    setViewFinalCheckout(true)
  }

  // Hide final checkout form
  const hideFinalCheckout = () => {
    setViewFinalCheckout(false)
  }
  


  return (
    <div className="App">
      <Navbar showCart={showCart} />
      <FreeShippingMsg />
      <Cart showFinalCheckout={showFinalCheckout} viewCart={viewCart} cartItems={cartItems} />
      <Showcase />
      <AboutUs />
      {fetchLoading ? <Loading type='spin' color='#000' /> : <Products showPurchaseModal={showPurchaseModal} categoryFilter={categoryFilter} shopItems={shopItems} />}
      <PurchaseModal addToCartMsg={addToCartMsg} addToCart={addToCart} viewModal={viewModal} closeModal={closeModal} newPurchaseObject={newPurchaseObject} />
      {viewFinalCheckout && <FinalCheckout hideFinalCheckout={hideFinalCheckout} viewFinalCheckout={viewFinalCheckout} cartItems={cartItems} />}
      <Newsletter />
      <Footer />
    </div>
  )
}


export default App
