import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()



export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)

    

    const addToCart = (item) => {
        setCart([...cart, item])

    }

    const removeFromCart = (itemId) => {

        const newCart = cart.filter( (item)=> item.id !== itemId  ) 
        setCart(newCart)
    }

    
    const cartTotal = () => {

      
    }


    

    useEffect ( () => {
        setCartQuantity(cart.length)
        console.log(cart)
    }, [cart] )

    return (

        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartQuantity, cartTotal }} >
            { children }
        </CartContext.Provider>
    )

}


