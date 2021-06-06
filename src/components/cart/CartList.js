import { Fragment, useContext, useEffect, useState } from "react"

import { CartItem } from "./CartItem"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
export const CartList = ( {setShowForm} ) => {
    const { cart,  clearCart, setCart, totalCartPrice } = useContext(CartContext)
    return (
        <Fragment>
        {cart.length > 0 ? (
                        <Fragment>
                        <div className="col-12">
                        <div className="cart-list-container">
                            <div className="row-cart-head"> 
                            <div className="items-head">  
                                <div className="producto">
                                    Producto
                                </div>  
                                <div className="item-description">
                                   Detalle
                                </div> 
                                <div>
                               <Link onClick={clearCart}>Limpiar carrito</Link>
                                </div>
                            </div>
                            </div>
                       { cart.map(props => (
                           <CartItem props={props}/>
                        
                             ) )}  
                            <div className="row-cart-list">
                                 <h5>Total: ${totalCartPrice()} </h5> 
                            </div>
                             <div className="row-cart-list">
                            
                                 <button onClick={() => setShowForm(true)}>Checkout</button>

                             </div>
                        
                            </div>    
                        </div>
                        
                        </Fragment>        
                       
                        ) : (

                        <div className="col-12">    
                            <div className="empty-cart-content">
                                <div className="empty-cart-text">
                                    <h2>Tu carrito esta vacio &#128576;</h2>

                                </div>  
                                <div className="empty-cart-button">
                                <Link exact to="/"> <button>Ver todos los productos</button></Link> 

                                </div>
                            </div>
                        </div>
                            )
                           
                            }
    </Fragment>
    )

    
}