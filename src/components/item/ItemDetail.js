
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"
import { Fragment } from "react"
import { CartContext } from "../../context/cartContext"

export const ItemDetail = ({ props }) => {


const [quantity, setQuantity] = useState(0)
const [buttonFinish, setButtonFinish] = useState(true)

const { addToCart } = useContext(CartContext)

useEffect( () => {
    if (quantity > 0) {
        
    }

}, [quantity]  )


const onAdd = (quantity) => {

   setQuantity(quantity)
   console.log(quantity)

   setButtonFinish(false)
   addToCart(props, quantity)
}


return (

        <div className="product">
            <div className="col-md-12">
                <div className="row">
            <div className="col-md-6"> 
                <div className="product-image-container"> 
                <img src={props.image} alt={props.title} className="img-fluid"/>
                </div>
            </div>  

            <div className="col-md-6">
                <div className="product-detail">
                    <h3> {props.title} </h3>
                    <p>{props.description} </p>
                    <h4>${props.price}</h4> 

                    { props.stock == 0 ? <p> Sin stock </p>  :  <p> {props.stock} disponibles </p> }
                    {
                    buttonFinish ?
                   <ItemCount 
                    stock={props.stock} 
                    initial={1} 
                    onAdd={onAdd} 
                    count={quantity}
                   />  

                    : 
                         
                       <Fragment>
                                
                       <Link to={"/cart"}><button className="button-finish">Finalizar Compra </button></Link>
                                    
                       </Fragment>    }      
                   
                </div>
                </div>  
            </div>        
            </div>
        </div>      
            
    )

}