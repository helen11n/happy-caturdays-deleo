import { Page } from "../components/page/Page"
import { ItemListContainer } from "../components/item/ItemListContainer"
import { BannerHome } from "./bannerHome/BannerHome"
import banner from "./../images/banner.png"
import { Link } from "react-router-dom"

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

    return (
        <>
        <Page>
        <div className="container-fluid">
            <div className="row">
                <div className="banner">
                <div className="col-lg-6 col-md-12">
                    <div className="banner-content">
                    <h1>Encontrá todo para vos y su Alteza</h1>
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
                
            <ItemListContainer/>
              
        </section>  
        </Page>
        </>
        
    )
}