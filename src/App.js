import './App.css';
import Header from './pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import { createContext, useState } from 'react';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/CheckOut/CheckOut';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';

const FoodContext = createContext([]);
function App() {
  const [foods, setFoods] = useState([]);
  const [totalQn, setTotalQn] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <FoodContext.Provider value={{ value: [foods, setFoods], value2: [totalQn, setTotalQn], value3: [totalPrice, setTotalPrice] }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/home' element={<Products />}
          ></Route>
          <Route path='/' element={<Products />}
          ></Route>
          <Route path='/home/cart' element={<Cart />}
          ></Route>
          <Route path='/home/cart/checkout' element={<CheckOut />}
          ></Route>
          <Route path='/home/login' element={<Login />}
          ></Route>
          <Route path='/home/cart/signup' element={<SignUp />}
          ></Route>
        </Routes>
      </div>
    </FoodContext.Provider>
  );
}

export { App, FoodContext };
