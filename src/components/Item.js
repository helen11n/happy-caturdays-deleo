import { ItemCount } from "./ItemCount"

export const Item = (props) => {
    
    return (

        
            <div className="container">
                <div className="row">
                    <div className="product">
                        <div className="col-6">  
                            
                        </div>  

                        <div className="col-6">
                            <div className="container-product-info">
                            <ItemCount stock={10} initial={1}/>
                            </div>  
                        </div>
                    </div>      
                </div>
            </div> 
        
    
    )

}

