import React from "react";

export default function ItemList({ productos }) {
    return (
      <div >
        <ul >
          {productos.map((producto) => (
           
  
            <li  key={producto.id}>              
              <h4>{`${producto.nombre}`}</h4>
              <small>{producto.categoria}</small>
              <small>{producto.descripcion}</small>
              <small>{producto.precio}</small>
              <br />
  
              <>
                <button>Ver más</button>
              </>
            </li>
            
          ))}
        </ul>
      </div>
    );
  }