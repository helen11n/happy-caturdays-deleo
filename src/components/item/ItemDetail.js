
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"

export const ItemDetail = ({ image, name, description, price }) => {


const [quantity, setQuantity] = useState(0)
const [buttonFinish, setButtonFinish] = useState(false)

useEffect( () => {
    if (quantity > 0) {
        setButtonFinish(true)
    }

}, [quantity]  )


const onAdd = (quantity) => {

    setQuantity(quantity)
   console.log(quantity)
}


return (

<div className="container">
                <div className="row">
                    <div className="product">
                        <div className="col-lg-6 col-sm-12">  
                              <img src={image} alt={name} />
                        </div>  

                        <div className="col-lg-6 col-sm-12">
                            <div className="product-detail">
                                <h2> {name} </h2>
                                <p>{description} </p>
                                <h4>${price}</h4> 

                                {buttonFinish ? ( 
                                  <Link to={"/cart"}><button className="button-finish">Finalizar Compra </button></Link>
                                 ) : 

                               ( <ItemCount stock={10} initial={1} onAdd={onAdd}/> )
                                
                                }

                            </div>  

                        </div>
                    </div>      
                </div>
            </div> 


    )



}