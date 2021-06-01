import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/cartContext";
import { Item } from "./Item"
import { getFirestore } from "../../firebase"
import { Loader } from "../loader/Loader"

export const ItemList = () => {

  const [products, setProducts] = useState([]);
  const {categoryId} = useParams()
  const [isEmptyCategory, setIsEmptyCategory] = useState(false)
  const [ loader, setLoader ] = useState(false)

  const {addToCart} = useContext(CartContext)
 

  useEffect ( () => {
    setLoader(true)
    const db = getFirestore()
    const itemCollection = db.collection("items")
    let filteredProd = []

    if (categoryId) {
      filteredProd = itemCollection.where( "category", "==", categoryId )
    } else {
      filteredProd = itemCollection
    }
  
  filteredProd.get()
    .then((querySnapshot) => {
        if(querySnapshot.size === 0) {
          setIsEmptyCategory(true)
        }
        setProducts(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
      }).catch(
        (error) => console.error("Firestore error:" , error)
      ).finally(() => setLoader(false) )
  }, [categoryId])
  

 
  return (
    <Fragment>
      <div className="container">
        <div className="row">
        { loader ? <Loader/> : 
          <div className="title-itemlist">
            { categoryId ? <h2>Productos para  {categoryId} </h2> : <h2>Todos los productos</h2>}
         </div>}
        </div>
        <div className="row row-cols-lg-4 row-cols-sm-12">  
     
          
        {isEmptyCategory ? (
          <div className="empty-list">
          <p>No hay productos para mostrar</p>
            
          </div>  
            ) : (

              

              products.map((product, index) => (
                <Item id={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      onAdd= {() => addToCart(product)}
                      key={index}
                    
                />
              ))
             
              )}
        </div>          
      </div>
    </Fragment>
  )
}





