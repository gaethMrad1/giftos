import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Basket from './components/Basket/Basket';
import { BasketContext } from './context/BasketContext';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const values = {total, setTotal, price, setPrice};

  return (
    <div className="App">
      <Header />
      <BasketContext.Provider value={values}>
        <Basket />
        <Outlet />
      </BasketContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
