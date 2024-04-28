import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import ShopContextProvider from './context/shop-context'

const App = () => {
  return (
    <ShopContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </ShopContextProvider>
  )
}

export default App
