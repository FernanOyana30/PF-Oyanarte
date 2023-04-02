import React from "react";
import {useContext} from "react";
import cartContext from "../context/cartContext";
import CheckoutCart from "./CheckoutCart";

function CartContainer(){
    const {cart, getPriceInCart} = useContext(cartContext)

    if(cart.length === 0)
    return ( 
    <div>
        <h3>Carrito de compras</h3>
        <p>Tu carrito está vacío. Agrega productos para finalizar tu compra</p>
    </div> ) 

    return (
        <>
        <div>
            <h3>Tu carrito de compras</h3>
            {cart.map((item) => {
                return (
                    <div>
                        <p>Producto: {item.nombre}</p>
                        <p>Precio: {item.precio}</p>
                        <p>Cant. unidades: {item.count}</p>                        
                        <p>Total: {item.count * item.precio}</p>                        
                    </div>

                );
            })}        
        </div>
        <div>
            <h3>El total de tu compra es: </h3>
        </div>

        <CheckoutCart total={getPriceInCart()} cart={cart}/>
        </>
    );
}

export default CartContainer;