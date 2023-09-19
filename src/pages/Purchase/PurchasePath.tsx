import "./PurchasePath.css";

const PurchasePath = () => {
  return (
    <div className="purchase-container">
      <p className="my-bag__text">1.MyBag</p>
      <span className="delivery-line"></span>
      <p className="delivery-text">2.delivery</p>
      <span className="payment-line"></span>
      <p className="payment-text">3.review&payment</p>
    </div>
  );
};

export default PurchasePath;
