import { Fragment, useContext } from "react"
import { CartContext } from "../../context/cartContext"

export const Page = ( {children} ) => {

    const cart = useContext(CartContext)


    return (
        <Fragment>

            <div>

                {children}

            </div>    

        </Fragment>


    )
}