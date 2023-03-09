import productos from "../productos";
import { useState, useEffect } from "react";
import "../style.css";
import { useParams } from "react-router-dom";



function ItemDetailContainer({ greeting }) {
  const [producto, setUser] = useState({});

  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        let encontrado = productos.find((producto) => producto.id === Number(idUser));
        resolve(encontrado);
      }, 2000);
    });

    promesaItem.then((respuesta) => setUser(respuesta));
  }, []);

  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>

        <ul className="item-list">
          <li className="item-card" key={producto.id}>            
            <h4>{producto.nombre}</h4>
            <small>{producto.categoria}</small>
            <p>{producto.precio}</p>
            <button>Agregar al carrito</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;