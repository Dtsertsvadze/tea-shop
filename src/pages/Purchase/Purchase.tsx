import PurchaseCart from "./PurchaseCart";
import "./Purchase.css";

import PurchasePath from "./PurchasePath";
import OrderSummary from "../Payments/Delivery/OrderSummary";

const Purchase = () => {
  return (
    <div className="container">
      <PurchasePath />
      <div className="container-flex">
        <PurchaseCart />
        <OrderSummary buttonText={"a"} />
      </div>
    </div>
  );
};

export default Purchase;
