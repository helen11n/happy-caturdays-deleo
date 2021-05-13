import { Page } from "../components/page/Page"
import { ItemListContainer } from "../components/item/ItemListContainer"


export const Home = () => {


    return (
        <>
        <Page>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 banner">
                    <div className="banner-content">
                    <h1>Encontrá todo para vos y su Alteza</h1>
                    </div> 
                </div>  
                 
            </div>
        </div>
        
        <div className="container">    
            <div className="row">
                <div className="">
                   <ItemListContainer/>
                </div>   
            </div>
        </div>
        </Page>
        </>
        
    )
}