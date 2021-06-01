import { Fragment, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import { getFirestore } from "../../firebase"
import { Input } from "../input/Input"
import firebase from 'firebase/app'
import { CartItem } from "./CartItem"
import "./cart.scss"


export const Cart = ( ) => {
  
    const { cart,  clearCart, setCart } = useContext(CartContext)

    const [form, setForm] = useState ({
        name: '', surname: '', email:'', phone: ''
    })
    const [order,setOrder] = useState('')

  
    const handleFinish = async () => {
        const db = getFirestore()
        const batch = db.batch()

        cart.forEach((item) => {
            const itemRef = db.collection("items").doc(item.id)
            batch.update(itemRef, { stock: item.stock - item.quantity})

        })

        batch.commit().then( (r) => console.log(r)  )

            setCart([])
            orderCart()
        
    }


    const formFields = [
        {
            id: 'name',
            label: 'Nombre',
            value: form.name,
            type: "text"
          
        },
        {
            id: 'surname',
            label: 'Apellido',
            value: form.surname,
            type: "text"
        },
        {
            id: 'email',
            label: 'Correo Electrónico',
            value: form.email,
            type: "email"
          
        },
        {
            id: 'phone',
            label: 'Teléfono',
            value: form.phone,
            type: "text"
          
        }

    ]

    const { name, surname, phone, email } = form

    const handleForm = (id, value) => {
        const newForm = { ...form, [id]: value }
        setForm(newForm)


    }

  const handleSubmit = (e) => {
      e.preventDefault()

      if ([name.trim(), surname.trim(), email.trim(), phone.trim()].includes('')) {
        alert('Por favor complete todos los campos');
       
      } else {
          handleFinish()
      }
       
    } 

    
    const orderCart = () => {
        const db = getFirestore()
        const ordersCollection = db.collection("orders")

      const items = cart.map(product => ( {id: product.id, title: product.title, price: product.price} ))
  
        const newOrder = {
         buyer: {name, surname, email, phone},
         items: items, 
         date: firebase.firestore.Timestamp.fromDate(new Date ()),
           // total: cartTotal()
        }

        ordersCollection.add(newOrder).then(({id}) => {
            setOrder(id)
        })
       
         alert("Compra realizada con éxito")   
         console.log("newOrder:", newOrder)
            
    }

    
    return (

 
        <section className="cart">
            <div className="container">
                <div className="row">
                   
                    {cart.length > 0 ? (
                        <Fragment>
                        <div className="col-lg-8 col-sm-12">
                        <div className="cart-list-container">
                            <div className="row-cart-list"> 
                            <div className="items-head">  
                                <div className="item-image">
                                    Producto
                                </div>  
                                <div className="item-description">
                                   Detalle
                                </div>  
                            </div>
                            </div>
                       { cart.map(props => (
                           <CartItem props={props}/>
                        /*     <div className="row-cart-list">
                                <div className="items-cart">
                                        <div className="item-image">
                                            <img src={props.image} />
                                        </div> 
                                        <div className="item-description">
                                            <p>{props.title}  </p>
                                            <p>$ {props.price}  </p>
                                            <p> {cartQuantity} </p>
                                        </div> 
                                        <div className="item-description">
                                            <button className="remove-from-cart" title="Eliminar del carrito" onClick={() => removeFromCart(props.id) }>X Eliminar</button>
                                        </div> 
                                        
                                </div>    
                            </div>*/
                           

                             ) )}  

                             <div className="row-cart-list">

                                 <button onClick={clearCart}>Limpiar carrito</button>

                             </div>
                        
                            </div>    
                        </div>
                        <div className="col-lg-4 col-sm-12">

                            <form className="form">
                            Total <br/>
                            {formFields.map(({ id, label, value, type }) => (
                                <Input 
                                    key={id} id={id} label={label} value={value} type={type} onChange={handleForm}
                                />
                            )

                            )
                            }
                            </form>
                            <div className="button-finish-container">
                                <button type="submit" onClick={handleFinish, handleSubmit}>Finalizar compra</button>
                            </div>    
                        </div>
                        </Fragment>        
                       
                        ) : (

                        <div className="col-12">    
                            <div className="empty-cart-content">
                                <div className="empty-cart-text">
                                    <h2>Tu carrito esta vacio &#128576;</h2>

                                </div>  
                                <div className="empty-cart-button">
                                <Link exact to="/"> <button>Ver todos los productos</button></Link> 

                                </div>
                            </div>
                        </div>
                            )
                           
                            }
                           
                        
                      
                   
               </div> 
            </div>
        </section>

    )

}