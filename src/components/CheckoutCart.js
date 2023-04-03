import React, {useState} from "react"
import {createOrder} from '../services/firestore'
import {useNavigate} from "react-router-dom"

function CheckoutCart({cart, total}) {
    const {orderId, setOrderId} = useState()
    const navigateTo = useNavigate()

    async function handleCheckout(){
        const orderData = {
        buyer: {name: "tuti", phone: "1234", email: "tuti@tuti.com"},
        items: cart,
        total: total,
        timestamp: new Date() ,
        }

        const id = await createOrder(orderData) 
        
        navigateTo(`/checkout/${id}`)
    }


    return (
        <div>
            <button onClick={handleCheckout}>Terminar compra</button>        
        </div>
    ) 
    

    /*
    return (
        <div>
        {
            orderId ? 
            <h3>Gracias por tu compra</h3>
            :
            <button onClick={handleCheckout}>Terminar compra</button> 
        }
        </div>
    )*/
}

export default CheckoutCart;