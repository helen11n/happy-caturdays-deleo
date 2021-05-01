import React, { useEffect, useState } from "react";


export const ItemList = () => {
  const [products, setProducts] = useState([]);

  const catProducts = [
    {
      name: "Cama",
      description: "Para que la use cuando no quiere usar la del esclavx",
      price: "4900"
    },
    {
      name: "Rascador",
      description: "Se usará cuando no queden muebles por rayar",
      price: "2500"
    },
    {
        name: "Catnip Fish",
        description: "El michi puede pegar un viaje",
        price: "1000"
      }
  ]


  useEffect( ()=> {
  const getProducts = new Promise((resolve, reject) => {
    
    setTimeout(() => {
     
      resolve(catProducts)
    }, 2000)
  })

  getProducts.then((product) => {
    setProducts(product)
  })
},[]  )


  return (
    <>
      <div className="container">
        <div className="row row-cols-4 products-row">    
             {products.map((product) => (
                    <div className="product-card">
                        <div className="card-content">
                            <h6 className="name-card">{product.name}</h6>
                            <h6 className="price-card">${product.price}</h6>
                        </div> 
                    </div> 
                    
            ))}
            
        </div>        
      </div>
    </>
  )
}





