import { useEffect, useState } from "react";
import productos from "../productos";

import ItemList from "../components/ItemList";

/*
export default function ItemListContainer({greeting}){
  const [users, setUsers] = useState([]);


  return (
      <div className="style-container">
          <h2>{greeting}</h2>
          <itemList users={users}/>
      </div>        
  );
}*/

function getItemsFromDatabase(){
  return new Promise( (resolve,reject)=>{
    setTimeout( () => {
      resolve(productos)
    }, 1000 )
  })
} 

// ---------------------------------------------------------------------------------------------------------------

function ItemListContainer ({greeting}){
  const [productos, setUsers] = useState([]);

  useEffect( () => {
    let promiseData = getItemsFromDatabase();

    console.log(promiseData); 
    promiseData.then(
      (respuesta) => {
        console.log("respuesta", respuesta)
        setUsers(respuesta) 
      },
    )

  },
  [] )


  return (
      <div className="style-container">
          <h2>{greeting}</h2>
          <itemList productos={productos}/>
      </div>        
  );
}

export default ItemListContainer;