import { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()
export const CartProvider = ({ children }) => {


    const [order, setOrder] = useState('')
    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    

    const addToCart = (item, quantity) => {
        let newCart = [...cart]
        const isItemFinded = isInCart(item)

        if (isItemFinded) {
            const itemFindedIndex = newCart.findIndex((prod) => prod.id === item.id)
            newCart[itemFindedIndex].quantity =
                newCart[itemFindedIndex].quantity + quantity
        } else {
            item.quantity = quantity
            newCart.push(item)
        }

        setCart(newCart)
    }

    const isInCart = (item) => cart.some((product) => product.id === item.id)

    const removeFromCart = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }


    useEffect(() => {
        const calcCartQuantity = () => {
            return cart.reduce((total, currentItem) => total + currentItem.quantity,0)
        }
        const newCalcQuantity = calcCartQuantity()
        setCartQuantity(newCalcQuantity)
    }, [cart])


    
  const totalCartPrice = () => {
    return cart.reduce((total, currentItem) => (total += currentItem.price * currentItem.quantity), 0)
  }

  
 

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                cartQuantity,
                clearCart,
                setCart,
                totalCartPrice,
                order,
                setOrder
            }}
        >
            {children}
        </CartContext.Provider>
    )
}