import "./Purchase.css";
import PurchasePath from "../../../components/PurchasePath/PurchasePath";
import OrderCard from "../../../components/OrderCard/OrderCard";
import SuggestProducts from "../../../components/SuggestProducts/SuggestProducts";
import PurchaseCart from "./PurchaseCart";
import { useContext } from "react";
import { MyContext } from "../../../API/Context";

const Purchase = () => {
  const ctx = useContext(MyContext);

  const deliveryFee = 3.95;

  const totalAmount = ctx?.totalAmount ? ctx.totalAmount + deliveryFee : 0;

  console.log(totalAmount);


  return (
    <div className="container">
      <PurchasePath />
      <div className="container-flex">
        <PurchaseCart />
        <OrderCard
          subtotal={ctx?.totalAmount}
          totalAmount={totalAmount}
          path="/payment/delivery"
          buttonText="Check Out"
        />
      </div>
      <SuggestProducts />
    </div>
  );
};

export default Purchase;
