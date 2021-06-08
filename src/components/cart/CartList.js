import { Fragment, useContext, useEffect, useState } from "react"

import { CartItem } from "./CartItem"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
export const CartList = ( {setShowForm} ) => {
    const { cart,  clearCart, setCart, totalCartPrice, cartQuantity } = useContext(CartContext)
    return (
        <Fragment>
        {cart.length > 0 ? (
                        <Fragment>
                        <div className="col-lg-8 col-md-12">
                        <div className="cart-list-container">
                            <div className="row-cart-head"> 
                            <div className="items-head">  
                                <div className="producto">
                                    Producto
                                </div>  
                                <div className="item-description">
                                   Detalle
                                </div> 
                                <div className="item-price">
                                    Subtotal
                                </div>
                                <div className="clearCart-button-container">
                               <button className="clearCart-button" onClick={clearCart}>Vaciar carrito</button>
                                </div>
                            </div>
                            </div>
                       { cart.map(props => (
                           <CartItem props={props}/>
                        
                             ) )}  
                            {/* <div className="row-cart-list">
                                 <h5>Total: ${totalCartPrice()} </h5> 
                            </div>
                             <div className="row-cart-list">
                            
                                 <button className="checkOut-button" onClick={() => setShowForm(true)}>Checkout</button>

                             </div> */}
                            
                            </div>    
                        </div>
                        <div className="col-lg-4 col-md-12">
                        <div className="">
                                <div className="cart-checkout">
                                <h6>Total productos: {cartQuantity} </h6>
                                 <h5>Total a abonar: <span> ${totalCartPrice()}</span>  </h5> 
                                 <button className="checkOut-button" onClick={() => setShowForm(true)}>CHECKOUT</button>
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