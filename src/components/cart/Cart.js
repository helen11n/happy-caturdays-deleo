import { Fragment, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import { getFirestore } from "../../firebase"
import { Input } from "../input/Input"
import firebase from 'firebase/app'
import { CartItem } from "./CartItem"
import { Loader } from "../loader/Loader"
import "./cart.scss"
import { Form } from "../form/Form"
import { CartList } from "./CartList"


export const Cart = ( ) => {
  
    const { cart,  clearCart, setCart, totalCartPrice , canBuy, checkIfCanBuy} = useContext(CartContext)

    const [showForm, setShowForm] = useState(false)

    
    return (

 
        <section className="cart">
            <div className="container">
                <div className="row">
                  
                   { showForm ? 
                    
                        <Form/> :
                        <CartList showForm={showForm} setShowForm={setShowForm} /> 
                        
                   }

                   
               </div> 
            </div>
        </section>

    )

}