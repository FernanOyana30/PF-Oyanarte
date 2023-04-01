import CartWidget from './CartWidget';
import '../style.css';
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <header className='navBar'>
            <div className="container-nav">
                <div className='style-brand'>
                    <h2><Link to="/" className='style-list'>El Capitán</Link></h2>
                </div>                
                <ul className="style-nav">
                    <li><Link to="/" className="style-list" >Inicio</Link></li>
                    <li><Link to="/category/Pescados" className="style-list" >Pescados</Link></li>
                    <li><Link to="/category/Mariscos" className="style-list" >Mariscos</Link></li>
                    <li><Link to="/category/Conservas" className="style-list" >Conservas</Link></li>                                                          
                                                                           
                </ul>
                <div className='cart-style'>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </div>                
            </div>            
        </header>
    )
}




