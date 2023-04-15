import React from "react";
import '../../style.css';
import { Link } from "react-router-dom";
import Button from "../Button/Button"

export default function ItemList({ productos }) {
  return (
    <>
      <div className="item-list-container">
        <ul className="item-list">
          {productos.map((producto) => (         

            <li className="item-card" key={producto.id}>
              <img src={producto.imagen} alt={producto.imagen} />
              <h5>{producto.nombre}</h5>
              <small>{producto.categoria}</small>                         
              {producto.oferta &&
                <small style={{color: "green"}}>
                  Oferta: {producto.oferta}%
                </small>                
              }
              <small>${producto.precio}</small>

              <Link to={`/detalle/${producto.id}`}>
                <Button>Ver más detalles</Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
    
  );
}

