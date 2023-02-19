import CartWidget from './CartWidget';
import '../style.css';

export default function NavBar(){
    return (
        <header className='navBar'>
            <div className="container-nav">
                <div className='style-brand'>
                    <h2>El Capitán</h2>
                </div>                
                <ul className="style-nav">
                    <li><a className="style-list" href="#">Inicio</a></li>
                    <li><a className="style-list" href="#">Productos</a></li>
                    <li><a className="style-list" href="#">Vender</a></li>                    
                </ul>
                <div className='cart-style'>
                    <CartWidget />
                </div>                
            </div>            
        </header>
    )
}

