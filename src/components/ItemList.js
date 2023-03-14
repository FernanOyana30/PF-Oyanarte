import React from "react";
import '../style.css';
import { Link } from "react-router-dom";

export default function ItemList({ productos }) {
  return (
    <>
      <div className="item-list-container">
        <ul className="item-list">
          {productos.map((producto) => (         

            <li className="item-card" key={producto.id}>
              <h4>{producto.nombre}</h4>
              <small>{producto.categoria}</small>           
              <br/>

              <Link to={`/detalle/${producto.id}`}>
                <button>Ver más detalles</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
    
  );
}

