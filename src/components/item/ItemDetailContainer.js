import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export const ItemDetailContainer = () => {

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
            price: "2900",
            category: "michis",
            image: "http://localhost:3000/static/media/rascador-basico.1991a54a.jpg"
          },
          {
            id:"3",
            name: "Catnip Fish",
            description: "El michi puede pegar un viaje",
            price: "1000",
            category: "michis",
            image: "http://localhost:3000//static/media/catnip-fish.2bacad4e.jpg"
            },
            {
              id:"4",
              name: "Rascador Premium",
              description: "Para michis llenos de energía que necesiten entrenar para dominar el mundo",
              price: "16500",
              category: "michis",
              image: "http://localhost:3000/static/media/rascador-premium.b12ad526.jpg"
            },
            {
              id:"11",
              name: "Remera Cat Dad",
              description: "Para orgullosos Karen Macho",
              price: "1490",
              category: "esclavxs",
              image: "http://localhost:3000/static/media/remera-catdad.a520fc9c.jpg"
            },
            {
              id:"12",
              name: "Remera Crazy Cat Lady",
              description: "Usala por si a alguien le queda alguna duda",
              price: "1490",
              category: "esclavxs",
              image: "http://localhost:3000/static/media/remera-catlady.ee6d80f5.jpg"
            },
            {
              id:"13",
              name: "Medias",
              description: "Te vas a querer sacar los zapatos todo el tiempo",
              price: "350",
              category: "esclavxs",
              image: "http://localhost:3000/static/media/medias.a905cb7a.jpg"
              }
    ]

    const { productId } = useParams()
    const [ item, setItem] = useState([])

    

    function getProductDetails(storeProducts) {
      const prodDetail = storeProducts.find( (item) => item.id === productId)

      return prodDetail
    }
   

    useEffect( ()=> {
      const showDetails = new Promise((resolve) => {
        
        setTimeout(() => {
         
          resolve( getProductDetails(storeProducts))
        }, 2000)
      })

      showDetails.then((item) => {
        setItem(item)
      })

    },[]  )   

  /*  const probando = () => {
     alert("probando")
   }*/ 

   

    return (
        <div className="container">
            <div className="row">
              
                <ItemDetail 
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
             // onAdd={probando}
                />
                
            </div>

        </div>

    )
}