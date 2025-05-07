import React from "react";
import Navbar from "./navbar/navbar";
import Cart from "../pages/Cart"
import Home from "../pages/Home"
import Footer from '../components/Footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from "../pages/ProductDetail";
import ShopContextProvider from "../context/ShopContext";

function App() {
    return (
        <div>
            <BrowserRouter>
                <ShopContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Home' element={<Home />} />
                        <Route path='/ProductDetail/:ProductDetailId' element={<ProductDetail />} />
                        <Route path='/Cart' element={<Cart />} />
                    </Routes>
                    <Footer />
                </ShopContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;