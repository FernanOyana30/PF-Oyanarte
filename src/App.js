//import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartContextProvider} from './context/cartContext';
import CartContainer from "./components/Cart/CartContainer";

//--------------------------------


//--------------------------------
function App() {
  return (
    <div className="App">  
    <CartContextProvider >   
      <BrowserRouter>
        <NavBar />          

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos"} />}
          />
          
          <Route path="/detalle/:idItem" element={<ItemDetailContainer />} />

          <Route 
            path='/category/:idCategory'
            element={<ItemListContainer greeting={"Bienvenidos"} />}
          />

          <Route path="/cart" element={ <CartContainer/> } />         
          <Route path="/checkout/:id" element={ <h3>¡Muchas gracias por tu compra! Tu pedido ya está en marcha</h3> } />         

        </Routes>      
      </BrowserRouter>      
    </CartContextProvider> 
    </div>
  );
  
}



export default App;
