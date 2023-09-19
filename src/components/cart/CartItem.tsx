import "./CartItem.css";
import img from "../../images/products/tea/tea1.webp";

const CartItem = () => {
  return (
    <div className="cart-item">
      <img src={img} />
      <div className="cart-item__content">
        <div>
          <p>Ceylon Ginger Cinnamon</p>
          <p>Chai Tea / 50g</p>
          <button className="cart-item__content-button">REMOVE</button>
          <p className="cart-item__content-span">$4.90</p>
        </div>
        <div className="cart-item__content-actions">
          <button className="cart-item__content-actions-button">-</button>
          <p>1</p>
          <button className="cart-item__content-actions-button">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
