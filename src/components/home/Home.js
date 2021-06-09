import { ItemListContainer } from "../item/ItemListContainer"
import { BannerHome } from "../bannerHome/BannerHome"
import { Fragment } from "react"
import { HeaderHome } from "../headerHome/HeaderHome"

import "./home.scss"

export const Home = () => {
     
  
    return (
        <Fragment>
        <HeaderHome/>

        <section>
               
            <BannerHome/>

        </section> 
        
        <section>
                
            <ItemListContainer />
              
        </section>  
        </Fragment>
    )
}