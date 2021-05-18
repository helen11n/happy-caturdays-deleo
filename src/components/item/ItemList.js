import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/cartContext";
import { Item } from "./Item"
//import { CartContext } from "../../context/cartContext"

export const ItemList = () => {

  const [products, setProducts] = useState([]);
  const {categoryId} = useParams()

  const {addToCart} = useContext(CartContext)
 

  const storeProducts = [
  
    {
      id:"1",
      name: "Cama",
      description: "Para que la use cuando no quiere usar la del esclavx",
      price: "4900",
      category: "michis",
      image: "http://localhost:3000/static/media/cama.119f5e1e.jpg"
    },
    {
      id:"2",
      name: "Rascador básico",
      description: "Se usará cuando no queden muebles por rayar",
      price: 2900,
      category: "michis",
      image: "http://localhost:3000/static/media/rascador-basico.1991a54a.jpg"
    },
    {
      id:"3",
      name: "Catnip Fish",
      description: "El michi puede pegar un viaje",
      price: 1000,
      category: "michis",
      image: "http://localhost:3000/static/media/catnip-fish.e881f768.jpg"
      },
      {
        id:"4",
        name: "Rascador Premium",
        description: "Para michis llenos de energía que necesiten entrenar para dominar el mundo",
        price: 16500,
        category: "michis",
        image: "http://localhost:3000/static/media/rascador-premium.b12ad526.jpg"
      },
      {
        id:"11",
        name: "Remera Cat Dad",
        description: "Para orgullosos Karen Macho",
        price: 1490,
        category: "esclavxs",
        image: "http://localhost:3000/static/media/remera-catdad.a520fc9c.jpg"
      },
      {
        id:"12",
        name: "Remera Crazy Cat Lady",
        description: "Usala por si a alguien le queda alguna duda",
        price: 1490,
        category: "esclavxs",
        image: "http://localhost:3000/static/media/remera-catlady.ee6d80f5.jpg"
      },
      {
        id:"13",
        name: "Medias",
        description: "Te vas a querer sacar los zapatos todo el tiempo",
        price: 350,
        category: "esclavxs",
        image: "http://localhost:3000/static/media/medias.a905cb7a.jpg"
        }
  ]

  const getCategory = (storeProducts) => {
    const productsByCategory = storeProducts.filter(product => product.category === categoryId)

    return productsByCategory
    
  }

  
  const getCategoryList = (storeProducts)=> {
    return new Promise ((resolve) => {
      setTimeout(() => {
      categoryId ?  resolve( getCategory(storeProducts) ) :  resolve (storeProducts)
    }, 2000)
    })
    
  }

  useEffect( () => {
    
    getCategoryList(storeProducts)
    .then(result => setProducts(result))

  }, [categoryId] )
  


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="title-itemlist">
            { categoryId ? <h2>Productos para  {categoryId} </h2> : <h2>Todos los productos</h2>}
         </div>
        </div>
        <div className="row row-cols-lg-4 row-cols-sm-12">  
     

        {products ? (
            products.map((product, index) => (
              <Item id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  onAdd= {() => addToCart(product)}

                  key={index}
                    
                   
              />
            ))
            
            ) : (
              <p>No hay productos para mostrar</p>
              )}
        </div>          
      </div>
    </>
  )
}





