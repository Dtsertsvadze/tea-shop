import { useContext, useState } from "react";
import OrderCard from "../../../components/OrderCard/OrderCard";
import PurchasePath from "../../../components/PurchasePath/PurchasePath";
import Address from "./Address";
import "./Delivery.css";
import { MyContext } from "../../../API/Context";

const Delivery = () => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const ctx = useContext(MyContext);

  return (
    <div className="container delivery">
      <PurchasePath style={true} />
      <div className="delivery-box">
        <Address onFormValidityChange={(isValid) => setFormIsValid(isValid)} />
        <OrderCard
          subtotal={ctx?.totalAmount}
          totalAmount={
            ctx?.totalAmount ? parseInt((ctx.totalAmount + 3.95).toFixed(2)) : 0
          }
          disabled={!formIsValid}
          path="/payment/pay"
          buttonText="go to payment"
        />
      </div>
    </div>
  );
};

export default Delivery;
