import {createContext, useState} from "react";

const cartContext = createContext({ 
    cart: [],
});

function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    function addItem(producto, count){
        const newCart = JSON.parse(JSON.stringify(cart));

        if(isInCart(producto.id)){
            let index = cart.findIndex(itemInCart => itemInCart.id === producto.id)
            newCart[index].count = newCart[index].count + count

        }
        else {
            newCart.push({...producto, count});
        }
        
        setCart(newCart);   
    }    

    /**FUNCIONES DEL CARRITO*/

    //Remover producto del carrito
    function removeItemFromCart(id){
        const newCart = JSON.parse(JSON.stringify(cart));
        newCart.pop();
        setCart(newCart);
    }

    //Vaciar carrito
    function clearCart(id){
        setCart([]);        
    }

    //Obtener total de productos en el carrito
    function getCountInCart() {
        let total = 0;
        cart.forEach((item) => total + item.count);
        return total;
    }

    //Obtener precio total de compra
    function getPriceInCart() {
        return 5600
    }

    //Verificar si un producto ya existe en el carrito
    function isInCart(id){
        return cart.some(item => item.id === id)
    }

    return (
        <cartContext.Provider value={{ cart, addItem, isInCart, removeItemFromCart, getPriceInCart }}>
            {children}
        </cartContext.Provider>
        );
}  

export {CartContextProvider}
export default cartContext;