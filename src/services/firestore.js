//--------------------------------

import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from "firebase/firestore";

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

export async function createOrder(orderData){
    const collectionRef = collection(db, "orders");

    const response = await addDoc(collectionRef, orderData)
    console.log("Orden lista", response.id)
    return response.id

}