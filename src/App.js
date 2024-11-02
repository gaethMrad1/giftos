import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop';
import WhyShopPage from './pages/WhyShopPage';
import Contact from './pages/Contact';
import AllProducts from './pages/AllProducts';
import ViewProduct from './pages/ViewProduct';
import Basket from './components/Basket/Basket';
import { BasketContext } from './context/BasketContext';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const values = {total, setTotal, price, setPrice};

  return (
    <div className="App">
      <Header />
      <BasketContext.Provider value={values}>
        <Basket />
        <Routes>
          <Route path="/Giftos" element={<Home />}/>
          <Route path="/Giftos/shop" element={<Shop />}/>
          <Route path="/Giftos/all-products" element={<AllProducts />}/>
          <Route path="/Giftos/product/:productId" element={<ViewProduct />}/>
          <Route path="/Giftos/why-us" element={<WhyShopPage />}/>
          <Route path="/Giftos/contact-us" element={<Contact />}/>
        </Routes>
      </BasketContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
