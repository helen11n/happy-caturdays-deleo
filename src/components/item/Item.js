import { Link } from "react-router-dom"

import "./item.scss"

export const Item = ( item ) => {
    
    return (
         
               <div className="col-lg-4 col-sm-12">
                    <div className="product-card">
                        <div className="card-content">
                     <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                            <h5>${item.price}</h5>
                            <Link to={`/producto/${item.id}`}>
                            <button>Ver producto</button>
                            </Link>

                        </div>
                    </div>   
                </div>
                        
        
    
    )

}

