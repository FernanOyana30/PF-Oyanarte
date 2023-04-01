import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

// -----------------------------------------------------------------------------------------------------------
//--------------------------------

import {collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

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
async function getItemsFromDatabase(){
  const productsColectionRef = collection(db, "productos");
  let snapshotProductos = await getDocs(productsColectionRef)
  const documents = snapshotProductos.docs;

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;   
        
} 

async function getItemsByCategoryFromDatabase(categoryURL) {
  const productsColectionRef = collection(db, "productos")

  const q = query(productsColectionRef, where("categoria", "==", categoryURL));

  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id}));
  return dataProducts;
}

// ---------------------------------------------------------------------------------------------------------------

function ItemListContainer ({greeting}){
  const [productos, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const idCategory = params.idCategory

  async function leerDatos() {
    if (idCategory === undefined){
      let respuesta = await getItemsFromDatabase();
      setProducto(respuesta);   
      setIsLoading(false);   
    } else{
      let respuesta = await getItemsByCategoryFromDatabase(idCategory);
      setProducto(respuesta); 
      setIsLoading(false);
    }

  }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);

  return (
      <div className="style-container">
          <h2>{greeting}</h2>
          {
            isLoading ? 
            <p>Cargando...</p>
            :
            <ItemList productos={productos}/>
          }
      </div>        
  );
}

export default ItemListContainer;