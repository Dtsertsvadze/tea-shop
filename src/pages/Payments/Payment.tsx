import OrderCard from "../../pages/Purchase/OrderCard";
import PurchasePath from "../../pages/Purchase/PurchasePath";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import "./Payment.css";
import PaymentType from "./PaymentType/PaymentType";

const Payment = () => {
  return (
    <div className="container payment">
      <PurchasePath />
      <div className="flex">
        <PaymentDetails />
        <PaymentType />
        <OrderCard buttonText="pay" />
      </div>
    </div>
  );
};

export default Payment;
