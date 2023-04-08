//--------------------------------

import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "el-capitan-tienda-eccomerce",
  storageBucket: "el-capitan-tienda-eccomerce.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
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