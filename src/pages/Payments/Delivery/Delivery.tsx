import PurchasePath from "../../pages/Purchase/PurchasePath";
import Address from "./Address";
import "./Delivery.css";
import OrderSummary from "./OrderSummary";

const Delivery = () => {
  return (
    <div className="container delivery">
      <PurchasePath />
      <div className="delivery-box">
        <Address />
        <OrderSummary buttonText="go to payment" />
      </div>
    </div>
  );
};

export default Delivery;
