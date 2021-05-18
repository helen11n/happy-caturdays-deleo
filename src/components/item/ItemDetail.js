
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
        setButtonFinish(true)
    }

}, [quantity]  )


const onAdd = (quantity) => {

    setQuantity(quantity)
   console.log(quantity)

  
 addToCart(props)
}


return (

<div className="container">
                <div className="row">
                    <div className="product">
                        <div className="col-lg-6 col-sm-12">  
                              <img src={props.image} alt={props.name} />
                        </div>  

                        <div className="col-lg-6 col-sm-12">
                            <div className="product-detail">
                                <h2> {props.name} </h2>
                                <p>{props.description} </p>
                                <h4>${props.price}</h4> 
                                
                                {buttonFinish ?
                                <Fragment>
                                
                                  <Link to={"/cart"}><button className="button-finish">Finalizar Compra </button></Link>
                                 
                               </Fragment>  
                                  : 

                               ( <ItemCount stock={10} initial={1} onAdd={onAdd} /> )
                                
                                }

                            </div>  

                        </div>
                    </div>      
                </div>
            </div> 


    )



}