import {BsFillCartFill} from "react-icons/bs"
import '../style.css';

export default function CartWidget() {
    return (
        <a className='cart-style' href="#">
            <BsFillCartFill className="cart-icon"></BsFillCartFill>
            <span className="cart-badge">0</span>
        </a>        
    )
}