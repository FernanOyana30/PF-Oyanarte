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
                    <li><Link to="/category/Pescados" className="style-list" href="#">Pescados</Link></li>
                    <li><Link to="/category/Mariscos" className="style-list" href="#">Mariscos</Link></li>
                    <li><Link to="/category/Conservas" className="style-list" href="#">Conservas</Link></li>                                      
                </ul>
                <div className='cart-style'>
                    <CartWidget />
                </div>                
            </div>            
        </header>
    )
}




