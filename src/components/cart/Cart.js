import { useState } from "react"
import { Form } from "../form/Form"
import { CartList } from "./CartList"

import "./cart.scss"


export const Cart = ( ) => {
  

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