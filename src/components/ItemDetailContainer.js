import "../style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../context/cartContext";

//--------------------------------

import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDae7tSxLViNhwbZF4k5__M5hPtmNa5SPg",
  authDomain: "el-capitan-tienda-eccomerce.firebaseapp.com",
  projectId: "el-capitan-tienda-eccomerce",
  storageBucket: "el-capitan-tienda-eccomerce.appspot.com",
  messagingSenderId: "721287180087",
  appId: "1:721287180087:web:2dad2416b3058ea83d74b2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//--------------------------------
//-------------------------------------------------
async function getSingleItemsFromDatabase(idItem){
  const productsColectionRef = collection(db, "productos");
  const docRef = doc(productsColectionRef, idItem);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists() === false) throw new Error("No existe el documento");

  return  {...docSnapshot.data(), id: docSnapshot.id};
} 

//-------------------------------------------------

function ItemDetailContainer({ greeting }) {
  const [producto, setProducto] = useState({});

  const params = useParams();
  const idItem = params.idItem ;

  useEffect(() => {
    getSingleItemsFromDatabase(idItem).then((respuesta) => {
      setProducto(respuesta);
    }).catch(error => alert(error))
  }, []);  
  
  const {addItem} = useContext(cartContext)

  /**Funcion Agregar al carrito*/
  function onAddToCart(count){
    alert(`Agregaste ${count} items al carrito`);
    addItem(producto, count);
  } 

  /*-----------------------*/
  if (producto.nombre === undefined) 
  return <p>Cargando...</p> 


  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>

        <ul className="item-list">
          <li className="item-card" key={producto.id}>   
            <img src={producto.imagen} alt={producto.imagen} />         
            <h4>{producto.nombre}</h4>
            <small>{producto.categoria}</small>
            <small>${producto.precio}</small>
            
            <ItemCount onAddToCart={onAddToCart} initial={1} stock={producto.stock} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;