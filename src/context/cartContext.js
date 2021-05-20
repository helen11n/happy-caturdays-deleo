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

    const isInCart = item => cart.find(product => product.id === item.id)
    
    const newCart = [...cart, item]
   
    const findItem = isInCart(item);
   
    if(findItem > 0) {
        newCart[newCart.findIndex(prod => prod.id === item.id)].quantity += cartQuantity
        setCart(newCart);
     
    } 
    
    item.quantity = quantity;
    newCart.push(item);
    setCart(newCart);
}




   /* 
  const addToCart = (item, quantity) => {
        const isInCart = cart.find((item) => item === item.id)
        if (isInCart > 0) {
            isInCart.quantity += cartQuantity
            setCart([...cart])
        } else {

        setCart([...cart, {...item, cartQuantity}])
        
        }
        console.log(isInCart)
    }
*/

    

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

        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartQuantity, clearCart}} >
            { children }
        </CartContext.Provider>
    )

}