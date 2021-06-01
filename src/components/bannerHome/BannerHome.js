import { Link } from "react-router-dom"
import "./bannerHome.scss"

export const BannerHome = () => {

    return (
        <>

       
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <Link className="text-decoration-none" to="/category/michis">
                        <div className="banner-home michis">
                            <h3>Productos para michis</h3>
                        </div>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                         <Link className="text-decoration-none" to="/category/esclavxs">
                        <div className="banner-home esclavxs">
                            <h3>Productos para esclav@s</h3>
                        </div>
                        </Link>
                    </div>
                   
                </div>
            </div>



        </>
    )
}