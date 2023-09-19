import "./OrderSummary.css";

interface OrderSummaryProps {
  buttonText: string;
}

const OrderSummary = ({ buttonText }: OrderSummaryProps) => {
  return (
    <div className="order-summary__container">
      <div className="order-summary__container-order">
        <h1>Order Summary</h1>
        <div>
          <p>
            Subtotal
            <span>$3.90</span>
          </p>
          <p>
            Delivery
            <span>$3.90</span>
          </p>
        </div>
      </div>
      <div className="order-summary__container-action">
        <p className="total">
          Total<span>$7.95</span>
        </p>
        <p>Estimated shipping time: 2 days</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default OrderSummary;
