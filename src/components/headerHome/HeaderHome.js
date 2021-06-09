import banner from "../../images/banner.png"
import "./headerHome.scss"

export const HeaderHome = () => {

    return (
       
        <div className="container-fluid">
            <div className="row">
                <div className="banner">
                <div className="col-lg-6 col-md-12">
                    <div className="banner-content">
                    <h1>Encontrá todo para vos y <span className="naranja">su Alteza</span></h1>
                    <h6> Tenemos un amplio surtido de productos para gatos y humanos </h6>

               
                    </div> 
                </div>  
                <div className="col-lg-6 col-md-12">
                    <div className="image-cat">
                  <img className="img-fluid" src={banner} />
                    </div>
                </div>    
                </div>
            </div>
        </div>
       
    )
}