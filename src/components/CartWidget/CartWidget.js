import {BsFillCartFill} from "react-icons/bs"
import '../../style.css';
import {useContext} from "react";
import cartContext from "../../context/cartContext";

function CartWidget() {
    const {cart, getCountInCart} = useContext(cartContext);
    //const cartCount = cart.length; 
    
    return (
        <span className='cart-style'>
            <BsFillCartFill className="cart-icon"></BsFillCartFill>
            <span className="cart-badge">{getCountInCart}</span>
        </span>        
    )
}

export default CartWidget;