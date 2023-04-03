import {createContext, useState} from "react";

const cartContext = createContext({ 
    cart: [],
});
const Provider = cartContext.Provider

function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    function addItem(producto, count){
        const newCart = [...cart];
        newCart.push({...producto, count});
        setCart(newCart);
    }    

    return (
        <cartContext.Provider value={{ cart: cart, addItem: addItem }}>
            {children}
        </cartContext.Provider>
        );
}  

export {CartContextProvider}
export default cartContext;