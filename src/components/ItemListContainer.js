import { useEffect, useState } from "react";
import productos from "../productos";
import ItemList from "./ItemList";


function getItemsFromDatabase(){
  return new Promise( (resolve,reject)=>{
    setTimeout( () => {
      resolve(productos)
    }, 1000 )
  })
} 

/*
function getItemsByCategoryFromDatabase(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productsFiltered = Productos.filter( producto => producto.categoria === categoryURL )
      resolve()
    }, 1000);
  })
}*/

// ---------------------------------------------------------------------------------------------------------------

function ItemListContainer ({greeting}){
  const [Productos, setUsers] = useState([]);

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
          <ItemList Productos={Productos}/>
      </div>        
  );
}

export default ItemListContainer;