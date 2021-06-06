export const OrderBuy = ( {orderCart, order} ) => {

    console.log ("orderCart", orderCart)
    console.log ("order", order)
    return(

        <>
        <div>
            <h3>Gracias por tu compra!</h3>
            <p>Nro de orden: {order} {orderCart}</p>
        </div>
        </>
    )


}