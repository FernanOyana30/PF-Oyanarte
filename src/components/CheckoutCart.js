import React from "react"
import {createOrder} from "../services/firestore"
import {useNavigate} from "react-router-dom";


function CheckoutCart({cart, total}) {    
    const navigateTo = useNavigate()

    async function handleCheckout(  ){
        const orderData = { 
            buyer: {name: "As", phone: "1234", email: "as@sa.com"},
            items: cart,
            total: total,
            timestamp: new Date(),
        };
        
        const id = await createOrder(orderData)
        console.log(id)
        
        navigateTo(`/checkout/${id}`)
    }

    return (
        <div>
            <button onClick={handleCheckout}>Finalizar compra</button>
        </div>
    )
}

export default CheckoutCart