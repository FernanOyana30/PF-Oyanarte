import CartWidget from './CartWidget';
import '../style.css';
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <header className='navBar'>
            <div className="container-nav">
                <div className='style-brand'>
                    <h2><Link to="/">El Capitán</Link></h2>
                </div>                
                <ul className="style-nav">
                    <li><Link to="/" className="style-list" href="#">Inicio</Link></li>
                    <li><Link to="/detalle" className="style-list" href="#">Detalle</Link></li>
                    <li><a className="style-list" href="#">Vender</a></li>                    
                </ul>
                <div className='cart-style'>
                    <CartWidget />
                </div>                
            </div>            
        </header>
    )
}




