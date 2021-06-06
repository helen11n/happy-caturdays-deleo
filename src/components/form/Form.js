import { Fragment, useContext, useState } from "react"
import { Input } from "../../components/input/Input"
import { CartContext } from "../../context/cartContext"
import { getFirestore } from "../../firebase"
import firebase from 'firebase/app'
import "./form.scss"
import { Link } from "react-router-dom"

export const Form = ({showForm, setShowForm}) => {

    const { cart,  setCart, totalCartPrice } = useContext(CartContext)

    const [form, setForm] = useState ({
        name: '', surname: '', email:'', phone: ''
    })

   // const [checkOut, setCheckOut] = useState(false)

    const [error, setError] = useState('')
    const [order,setOrder] = useState('')

    const formFields = [
        {
            id: 'name',
            label: 'Nombre',
            value: form.name,
            type: "text",
            placeholder: "Nombre"
          
        },
        {
            id: 'surname',
            label: 'Apellido',
            value: form.surname,
            type: "text",
            placeholder: "Apellido"
        },
        {
            id: 'email',
            label: 'Correo Electrónico',
            value: form.email,
            type: "email",
            placeholder: "Email"
          
        },
        {
            id: 'phone',
            label: 'Teléfono',
            value: form.phone,
            type: "text",
            placeholder: "Teléfono"
          
        }

    ]

    const stockUpdate = async () => {
        const db = getFirestore()
        const batch = db.batch()

        cart.forEach((item) => {
            const itemRef = db.collection("items").doc(item.id)
            batch.update(itemRef, { stock: item.stock - item.quantity})

        })

        batch.commit().then( (r) => console.log(r)  )

            setCart([])
           
        
    }


    const { name, surname, phone, email } = form

    const handleForm = (id, value) => {
        const newForm = { ...form, [id]: value }
        setForm(newForm)


    }

  const handleSubmit = (e) => {
      e.preventDefault()


      let patternNombre = /^[a-zA-Z- ]*$/
      let patternEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

      if (!patternNombre.test(name) || !patternNombre.test(surname) || !patternEmail.test(email)) {

        setError("Por favor revisa los campos")
       // alert("Por favor completa los campos de forma correcta")
      } else if ([name.trim(), surname.trim(), email.trim(), phone.trim()].includes('')) {
        setError('Por favor completa todos los campos')
      } else {
        orderCart()
      }
       
    } 

    
    
    const orderCart = () => {
        const db = getFirestore()
        const ordersCollection = db.collection("orders")

      const items = cart.map(product => ( {id: product.id, title: product.title, price: product.price, quantity: product.quantity} ))
  
        const newOrder = {
         buyer: {name, surname, email, phone},
         items: items, 
         date: firebase.firestore.Timestamp.fromDate(new Date ()),
         total: totalCartPrice()
        }

        ordersCollection.add(newOrder).then(({id}) => {
            setOrder(id)
        }).catch((error) => {
            console.log('Hubo un error al crear la orden', error);
        }).finally(stockUpdate())
       
            alert("Compra realizada con éxito:" + {order} )   
         console.log("newOrder:", newOrder)
            
    }

    return (
        <Fragment>
        <div className="cart-form-container ">    
           
            <div className="cart-total">            
                <h5>Total: ${totalCartPrice()} </h5> 
            </div>
            <div className="text-cart-form">
                <p>Completá tus datos para confirmar tu compra</p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
               
                 {formFields.map(({ id, label, value, type, placeholder }) => (
                        <Input 
                            key={id} id={id} label={label} value={value} type={type} onChange={handleForm} placeholder={placeholder}
                        />
                        
                        )

                        )
                    } 
                    
            </form>
            {error && <p className="error"> {error} </p> }
            <div className="button-finish-container">
            <Link to="/cartCheckOut">
           <button type="submit" onClick={orderCart} >Confirmar compra</button>
           </Link>
            </div>  
        </div>            
        </Fragment>


    )

}