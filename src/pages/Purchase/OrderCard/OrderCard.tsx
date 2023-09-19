import "./OrderCard.css";

interface OrderCardProps {
  buttonText: string;
}

const OrderCard = ({ buttonText }: OrderCardProps) => {
  return (
    <div className="order-summary-container">
      <div className="order-summary-container__checkout">
        <div className="order-summary-container__checkout-container">
          <h1 className="container-heading">Order Summary</h1>
          <p className="container-paragraph">
            Subtotal<span>$3.90</span>
          </p>
          <p className="container-paragraph">
            Delivery<span>$3.95</span>
          </p>
        </div>
        <div>
          <p className="container-paragraph">
            Total<span>$7.85</span>
          </p>
        </div>
        <div className="order-container">
          <p className="order-container__text">
            Estimated shipping time 2 days
          </p>
          <button className="order-container__button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
