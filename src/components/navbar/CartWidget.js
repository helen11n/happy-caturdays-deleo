import cartIcon from "../../images/cart.svg"
import userIcon from "../../images/user.svg"
import { CartContext } from "../../context/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom";

export const CartWidget = () => {
const cartQuantity  = useContext(CartContext)
  return (
    <div className="secondary-menu">
      <ul>
        <li>
      <img src={userIcon} alt="user" />
      </li>
      <li>
      <Link to={"/cart"} ><img src={cartIcon} alt="cart icon" /> <span className="cartCount">{cartQuantity.cartQuantity}</span></Link>
      </li>
      </ul>
    </div>
  );
};
