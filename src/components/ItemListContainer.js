import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productos from "../productos";
import { useParams } from "react-router-dom";

// -----------------------------------------------------------------------------------------------------------
function getItemsFromDatabase(){
  return new Promise( (resolve,reject)=>{
    setTimeout( () => {
      resolve(productos)
    }, 1000 )
  })
} 


function getItemsByCategoryFromDatabase(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productsFiltered = productos.filter( producto => producto.categoria === categoryURL )
      resolve(productsFiltered)
    }, 1000);
  })
}

// ---------------------------------------------------------------------------------------------------------------

function ItemListContainer ({greeting}){
  const [productos, setUsers] = useState([]);

  const params = useParams();
  const idCategory = params.idCategory

  async function leerDatos() {
    if (idCategory === undefined){
      let respuesta = await getItemsFromDatabase();
      setUsers(respuesta);      
    } else{
      let respuesta = await getItemsByCategoryFromDatabase(idCategory);
      setUsers(respuesta); 
    }

  }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);

  /*
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
  [] )*/


  return (
      <div className="style-container">
          <h2>{greeting}</h2>
          <ItemList productos={productos}/>
      </div>        
  );
}

export default ItemListContainer;