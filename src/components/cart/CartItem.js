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
                        <img src={props.image} alt={props.title} />
                    </div> 
                    <div className="item-description">
                        <h6>{props.title}  </h6>
                                            
                        <p> Cantidad: {props.quantity} </p>

                        <p>Precio unitario: ${props.price}</p>
                    </div> 
                    <div className="item-description">
                        <h6>${props.price * props.quantity}  </h6>
                    </div>
                    <div className="item-description">
                        <button className="remove-from-cart" title="Eliminar del carrito" onClick={() => removeFromCart(props.id) }>X Eliminar</button>
                    </div> 
                                        
                </div>    
            </div>
        </Fragment>
    )
}