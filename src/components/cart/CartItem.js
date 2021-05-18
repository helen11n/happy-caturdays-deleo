import { Fragment } from "react"
import {useContext} from 'react'


export const CartItem = ( {props} ) => {

    return (
        <Fragment>
             <div className="items-cart">
                               <div className="items-cart-2">
                                <p>Producto: {props.name}  </p>
                                </div> 
                                <div className="items-cart-2">
                                <p>Precio: {props.price}  </p>
                                </div> 
                           </div>    
        </Fragment>
    )
}