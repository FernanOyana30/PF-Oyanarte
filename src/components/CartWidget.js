import {BsFillCartFill} from "react-icons/bs"
import '../style.css';
import {useContext} from "react";
import cartContext from "../context/cartContext";

function CartWidget() {
    const {cart} = useContext(cartContext);
    const cartCount = cart.length; 
    return (
        <a className='cart-style' href="#">
            <BsFillCartFill className="cart-icon"></BsFillCartFill>
            <span className="cart-badge">{cartCount}</span>
        </a>        
    )
}

export default CartWidget;