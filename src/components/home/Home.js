import { ItemListContainer } from "../item/ItemListContainer"
import { BannerHome } from "../bannerHome/BannerHome"
import banner from "../../images/banner.png"
import { Link } from "react-router-dom"

import { Fragment } from "react"

import "./home.scss"
import { HeaderHome } from "../headerHome/HeaderHome"

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