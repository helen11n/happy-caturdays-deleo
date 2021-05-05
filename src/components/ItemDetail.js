import { ItemCount } from "./ItemCount"

export const ItemDetail = ({ image, name, description, price  }) => {

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
                                <ItemCount stock={10} initial={1}/>
                            </div>  
                        </div>
                    </div>      
                </div>
            </div> 

/*

        <div className="container">
                <div className="row">
                    <div className="product">
                        <div className="col-6">  
                      
                        </div>  

                        <div className="col-6">
                            <div className="container-product-info">
                                <h3> {name} </h3>
                                <p> </p>
                                <ItemCount stock={10} initial={1}/>
                            </div>  
                        </div>
                    </div>      
                </div>
            </div> 
            */
    )



}