import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
 
 /*
    const addToCart = (item) => {
        setCart([...cart, item])

    }

*/

const addToCart = (item, quantity) => {

    
    
    const newCart = [...cart]
   
    const findItem = isInCart(item);
   
    if(findItem > 0) {
        newCart[newCart.findIndex(prod => prod.id === item.id)].quantity += cartQuantity
        setCart(newCart);
        
    } 

   
    
    item.quantity = quantity;
    newCart.push(item);
    setCart(newCart);
}

const isInCart = item => cart.find(product => product.id === item.id)



    const removeFromCart = (itemId) => {

        const newCart = cart.filter( (item)=> item.id !== itemId  ) 
        setCart(newCart)
      
    }

    const clearCart = () => {
        setCart([])
    }


  
    useEffect ( () => {
        setCartQuantity(cart.length)
        console.log(cart)
    }, [cart] )

    return (

        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartQuantity, clearCart, setCart}} >
            { children }
        </CartContext.Provider>
    )

}