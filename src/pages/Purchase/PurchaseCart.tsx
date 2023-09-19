import CartItem from "../../components/cart/CartItem";
import "./PurchaseCart.css";

const PurchaseCart = () => {
  return (
    <div className="purchase-cart">
      <div className="purchase-cart-items">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="purchase-cart__subtotal">
        <p className="purchase-cart__subtotal-text">
          subtotal<span>$3.90</span>
        </p>
        <button className="purchase-cart__button">
          <p className="purchase-cart__button-text">Back to shopping</p>
        </button>
      </div>
    </div>
  );
};

export default PurchaseCart;
