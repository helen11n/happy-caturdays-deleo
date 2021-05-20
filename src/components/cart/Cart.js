import { Fragment, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
//import { CartItem } from "./CartItem"
import "./cart.scss"

export const Cart = ( ) => {
  
    const { cart, removeFromCart, quantity, clearCart } = useContext(CartContext)

    useEffect( () => {

    },[] )
    
    return (

 
        <section className="cart">
            <div className="container">
                <div className="row">
                    
                        
                       
                    {cart.length > 0 ? (
                        <Fragment>
                        <div className="col-lg-8 col-sm-12">
                        <div className="cart-list-container">
                            <div className="row-cart-list"> 
                            <div className="items-head">  
                                <div className="item-image">
                                    Producto
                                </div>  
                                <div className="item-description">
                                   Detalle
                                </div>  
                            </div>
                            </div>
                       { cart.map(props => (
                           
                            <div className="row-cart-list">
                                <div className="items-cart">
                                        <div className="item-image">
                                            <img src={props.image} />
                                        </div> 
                                        <div className="item-description">
                                            <p>{props.name}  </p>
                                            <p>$ {props.price}  </p>
                                            <p> {quantity} </p>
                                        </div> 
                                        <div className="item-description">
                                            <button className="remove-from-cart" title="Eliminar del carrito" onClick={() => removeFromCart(props.id) }>X Eliminar</button>
                                        </div> 
                                        
                                </div>    
                            </div>
                           

                             ) )}  

                             <div className="row-cart-list">

                                 <button onClick={clearCart}>Limpiar carrito</button>

                             </div>
                        
                            </div>    
                        </div>
                        <div className="col-lg-4 col-sm-12">
                           Total 
                        </div>
                        </Fragment>        
                       
                        ) : (
                            <div className="col-12">
                                <div className="empty-cart-text">
                                    <h2>Tu carrito esta vacio &#128576;</h2>

                                </div>  
                                <div className="empty-cart-button">
                                <Link exact to="/"> <button>Ver todos los productos</button></Link> 

                                </div>
                            </div>
                            )
                           
                            }
                           
                        
                      
                   
               </div> 
            </div>
        </section>

    )

}