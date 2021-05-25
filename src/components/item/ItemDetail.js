
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"
import { Fragment } from "react"
import { CartContext } from "../../context/cartContext"

export const ItemDetail = ({ props }) => {


const [quantity, setQuantity] = useState(0)
const [buttonFinish, setButtonFinish] = useState(false)

const { addToCart } = useContext(CartContext)

useEffect( () => {
    if (quantity > 0) {
        
    }

}, [quantity]  )


const onAdd = (quantity) => {

    setQuantity(quantity)
   console.log(quantity)

   setButtonFinish(true)
 addToCart(props, quantity)
}


return (

<div className="container">
                <div className="row">
                    <div className="product">
                        <div className="col-lg-6 col-sm-12">  
                              <img src={props.image} alt={props.title} />
                        </div>  

                        <div className="col-lg-6 col-sm-12">
                            <div className="product-detail">
                                <h2> {props.title} </h2>
                                <p>{props.description} </p>
                                <h4>${props.price}</h4> 
                                <p> {props.stock} disponibles </p>
                                
                                {buttonFinish ?
                                <Fragment>
                                
                                  <Link to={"/cart"}><button className="button-finish">Finalizar Compra </button></Link>
                                 
                               </Fragment>  
                                  : 

                               ( <ItemCount 
                                stock={props.stock} 
                                initial={1} 
                                onAdd={onAdd} 
                                count={quantity}
                                 /> )
                                
                                }

                            </div>  

                        </div>
                    </div>      
                </div>
            </div> 


    )



}