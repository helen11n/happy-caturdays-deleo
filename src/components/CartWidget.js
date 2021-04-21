import cart from "../images/cart.svg";

export const CartWidget = () => {
  return (
    <div className="cart-container">
      <span className="cart">
        <img src={cart} alt="cart icon" />
      </span>
    </div>
  );
};
