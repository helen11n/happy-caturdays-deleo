import React, { useEffect, useState } from "react";
import { Item } from "./Item"

export const ItemList = () => {

  const [products, setProducts] = useState([]);

  const storeProducts = [
  
      {
        id:"1",
        name: "Cama",
        description: "Para que la use cuando no quiere usar la del esclavx",
        price: "4900",
        category: "Cats",
        image: "http://localhost:3000/static/media/cama.119f5e1e.jpg"
      },
      {
        id:"2",
        name: "Rascador básico",
        description: "Se usará cuando no queden muebles por rayar",
        price: "2500",
        category: "Cats",
        image: "http://localhost:3000/static/media/rascador-basico.1991a54a.jpg"
      },
      {
        id:"3",
        name: "Catnip Fish",
        description: "El michi puede pegar un viaje",
        price: "1000",
        category: "Cats",
        image: "http://localhost:3000//static/media/catnip-fish.2bacad4e.jpg"
        },
        {
          id:"11",
          name: "Remera Cat Dad",
          description: "Para orgullosos Karen Macho",
          price: "1490",
          category: "Humans",
          image: "http://localhost:3000///static/media/remera-catdad.bc5d5a42.jpg"
        },
        {
          id:"12",
          name: "Medias",
          description: "Te vas a querer sacar los zapatos todo el tiempo",
          price: "350",
          category: "Humans",
          image: "http://localhost:3000/static/media/medias.a905cb7a.jpg"
        },
        {
          id:"13",
          name: "Otra cosa",
          description: "No se",
          price: "1000",
          category: "Humans",
          image: ""
          }
  ]

  useEffect( ()=> {
  const getProducts = new Promise((resolve, reject) => {
    
    setTimeout(() => {
     
      resolve(storeProducts)
    }, 2000)
  })

  getProducts.then((product) => {
    setProducts(product)
  })
  
},[]  )

  return (
    <>
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-sm-12">  
        {products ? (
            products.map((product) => (
              <Item id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
              />
            ))
            
            ) : (
              <p>Loading...</p>
              )}
        </div>          
      </div>
    </>
  )
}





