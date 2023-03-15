import "../style.css";
import { useState, useEffect } from "react";
import productos from "../productos";
import { useParams } from "react-router-dom";

//-------------------------------------------------
function getSingleItemsFromDatabase(idItem ){
  return new Promise( (resolve,reject)=>{
    setTimeout( () => {
      let encontrado = productos.find((producto) => producto.id === Number(idItem));
        resolve(encontrado);      
    }, 1000 )
  })
} 
//-------------------------------------------------

function ItemDetailContainer({ greeting }) {
  const [producto, setUser] = useState({});

  const params = useParams();
  const idItem = params.idItem ;

  useEffect(() => {
    getSingleItemsFromDatabase(idItem).then((respuesta) => {
      setUser(respuesta);
    })    
  }, []);

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
            <button>Agregar al carrito</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;