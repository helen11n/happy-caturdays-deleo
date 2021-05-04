import { Link } from "react-router-dom"

export const Item = ( item ) => {
    
    return (
         
               <div className="col-lg-4 col-sm-12">
                    <div className="product-card">
                        <div className="card-content">
                     <img src={item.image} alt={item.name} />
                            <h4>{item.name}</h4>
                            <h5>${item.price}</h5>
                            <Link to={`/producto/${item.id}`}>
                            <button>Ver producto</button>
                            </Link>

                        </div>
                    </div>   
                </div>
                        
        
    
    )

}

