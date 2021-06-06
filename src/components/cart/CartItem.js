import { Fragment } from "react"
import {useContext} from 'react'
import { CartContext } from "../../context/cartContext"

export const CartItem = ( {props} ) => {
    const {  removeFromCart, cartQuantity } = useContext(CartContext)

    
    return (
        <Fragment>
            <div className="row-cart-list">
                                <div className="items-cart">
                                        <div className="item-image">
                                            <img src={props.image} />
                                        </div> 
                                        <div className="item-description">
                                            <p>{props.title}  </p>
                                            <p>$ {props.price}  </p>
                                            <p> Cantidad: {props.quantity} </p>
                                        </div> 
                                        <div className="item-description">
                                            <button className="remove-from-cart" title="Eliminar del carrito" onClick={() => removeFromCart(props.id) }>X Eliminar</button>
                                        </div> 
                                        
                                </div>    
                            </div>
        </Fragment>
    )
}