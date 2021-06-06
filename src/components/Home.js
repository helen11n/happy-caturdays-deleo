import { Page } from "../components/page/Page"
import { ItemListContainer } from "../components/item/ItemListContainer"
import { BannerHome } from "./bannerHome/BannerHome"
import banner from "./../images/banner.png"
import { Link } from "react-router-dom"
import { getFirestore } from "../firebase"
import { useEffect, useState } from "react"



export const Home = () => {
      /* 
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 banner">
                    <div className="banner-content">
                    <h1>Encontrá todo para vos y su Alteza</h1>
                    </div> 
                </div>  
                 
            </div>
        </div>
        */
  /*      const [itemsHome, setItemsHome] = useState()
        useEffect( () => {
            const db = getFirestore()

            const itemCollection = db.itemCollection("items")
            const featuredHome = itemCollection.where("featured", "==", true)

            featuredHome.get().then((querySnapshot) => {
                if(querySnapshot.size === 0) {
                    console.log("no hay productos")
                }
                setItemsHome(querySnapshot.docs.map(doc => doc.data()))
            })

        },[] )*/

    return (
        <>
        <Page>
        <div className="container-fluid">
            <div className="row">
                <div className="banner">
                <div className="col-lg-6 col-md-12">
                    <div className="banner-content">
                    <h1>Encontrá todo para vos y <span className="naranja">su Alteza</span></h1>
                    <h6> Tenemos un amplio surtido de productos para gatos y humanos </h6>

                <Link to="#productos-home">   <button> Ver productos </button></Link> 
                    </div> 
                </div>  
                <div className="col-lg-6 col-md-12">
                    <div className="image">
                  <img className="img-fluid" src={banner} width="75%"/>
                    </div>
                </div>    
                </div>
            </div>
        </div>


        <section className="mt-5">
               
            <BannerHome/>

        </section> 
        
        <section className="mt-5" id="productos-home">
                
            <ItemListContainer />
              
        </section>  
        </Page>
        </>
        
    )
}