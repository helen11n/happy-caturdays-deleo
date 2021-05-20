import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getFirestore } from "../../firebase"

export const ItemDetailContainer = () => {

  const { productId } = useParams()
    const [ item, setItem] = useState([])


    useEffect ( () => {
      const db = getFirestore()
      const itemCollection = db.collection("items")

      const item = itemCollection.doc(productId)
      item.get()
      .then((doc) => {
         
          setItem({id: doc.id, ...doc.data()})
        }).catch(
          (error) => console.error("Firestore error:" , error)
        )
    }, [productId])

    

    return (
        <div className="container">
            <div className="row">
              
                <ItemDetail 
                props={item}
           
                />
                
            </div>

        </div>

    )
}