import { ItemListContainer } from "./item/ItemListContainer"


export const Home = () => {


    return (
        <>
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
        </>
        
    )
}