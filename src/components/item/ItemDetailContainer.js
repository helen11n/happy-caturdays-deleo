import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getFirestore } from "../../firebase"
import { Loader } from "../loader/Loader"

export const ItemDetailContainer = () => {

  const { productId } = useParams()
    const [ item, setItem] = useState([])
    const [ loader, setLoader ] = useState(false)

    useEffect ( () => {
      setLoader(true)
      const db = getFirestore()
      const itemCollection = db.collection("items")

      const item = itemCollection.doc(productId)
      item.get()
      .then((doc) => {
         
          setItem({id: doc.id, ...doc.data()})
        }).catch(
          (error) => console.error("Firestore error:" , error)
        ).finally(() => setLoader(false) )
    }, [productId])

    

    return (
        <div className="container">
            <div className="row">

            {loader ? <Loader/> : 
              
                <ItemDetail 
                props={item}
           
                />
              } 
            </div>

        </div>

    )
}