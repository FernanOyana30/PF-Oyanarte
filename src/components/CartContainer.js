import React from "react";
import {useContext} from "react";
import cartContext from "../context/cartContext";
import CheckoutCart from "./CheckoutCart";
import Button from "./Button"

function CartContainer(){
    const {cart, removeItemFromCart, getPriceInCart, clearCart} = useContext(cartContext)

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
            <table className="cartTable">
                <thead className="cartHead" >
                    <tr className="cartRow">
                        <th className="cartRowName">Producto</th>
                        <th className="cartRowPrice">Precio</th>
                        <th className="cartRowUnit">Cant. unidades</th>
                        <th className="cartRowTotal">Total</th>
                        <th className="cartRowDelete"></th>
                    </tr>
                </thead>
                <tbody>
                   {cart.map((item) => {
                    return (
                            <tr key={item.id} className="cartRow" >
                                <td>{item.nombre}</td>
                                <td>${item.precio}</td>
                                <td>{item.count}</td>                        
                                <td>{item.count * item.precio}</td>                        
                                <td >
                                    <button color="red" className="deleteButton" onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
                                </td>
                            </tr>
                        );
                    })}  
                </tbody>
            </table>                   
        </div>
        <div className="cartDetail" >
            <h5>El total de tu compra es: ${getPriceInCart} </h5>
        </div>
        <div>
            <button color="gray" onClick={clearCart}>Vaciar carrito</button>
        </div><br></br>

            <CheckoutCart total={getPriceInCart} cart={cart}/>
        
        </>
    );
}

export default CartContainer;