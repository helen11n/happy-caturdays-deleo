import { ItemCount } from "./ItemCount"

export const ItemDetail = ({ image, name, description }) => {

    return (

<div className="container">
                <div className="row">
                    <div className="product">
                        <div className="col-6">  
                              <img src={image} alt={name} />
                        </div>  

                        <div className="col-6">
                            <div className="">
                                <h3> {name} </h3>
                                <p>{description} </p>
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