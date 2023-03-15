//import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">      
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
          
        </Routes>      
      </BrowserRouter>      
    </div>
  );
  
}



export default App;
