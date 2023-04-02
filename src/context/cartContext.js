import {createContext, useState} from "react";

const cartContext = createContext({ 
    cart: [],
});

 function CartContextProvider(props){
    const [cart, setCart] = useState([]);

    function addItem(producto, count){
        const newCart = [...cart];
        newCart.push({...producto, count});
        setCart(newCart);
    }

    return (
        <cartContext.Provider value={{ cart: cart, addItem: addItem }}>
            {props.children}
        </cartContext.Provider>
        );
}  

export {CartContextProvider}
export default cartContext;