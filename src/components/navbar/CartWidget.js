import cartIcon from "../../images/cart.svg"
import { CartContext } from "../../context/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom";

export const CartWidget = () => {
const cartQuantity  = useContext(CartContext)
  return (
    <div className="cart-container">
      <span className="cart">
      <Link to={"/cart"} ><img src={cartIcon} alt="cart icon" /> <span className="cartCount">{cartQuantity.cartQuantity}</span></Link>
      </span>
    </div>
  );
};
