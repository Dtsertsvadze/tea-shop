import "./Order.css";
import img5 from "../../../images/icons/paymentIcons/icon1.png";
import img1 from "../../../images/icons/paymentIcons/icon2.png";
import img2 from "../../../images/icons/paymentIcons/icon3.png";
import img4 from "../../../images/icons/paymentIcons/icon5.png";
import icon from "../../../images/icons/expand.png";
import OrderCard from "../../../../components/OrderCard/OrderCard";

const Order = () => {
  return (
    <div className="order-summary-container">
      <OrderCard buttonText="Check Out" />
      <div className="payment-type">
        <p className="payment-type__text">Payment type</p>
        <div className="payment-type__icons">
          <img src={img1} />
          <img src={img2} />
          <img src={img4} />
          <img src={img5} />
          <img src={img2} />
        </div>
      </div>
      <div className="retour-container">
        <p className="retour-container__heading">Delivery and retour</p>
        <div className="retour-container__flex">
          <img src={icon} />
          <p className="retour-container__text">
            Order before 12:00 and we will ship the same day.
          </p>
        </div>
        <div className="retour-container__flex">
          <img src={icon} />
          <p className="retour-container__text">
            Orders made after Friday 12:00 are processed on Monday.
          </p>
        </div>
        <div className="retour-container__flex">
          <img src={icon} />
          <p className="retour-container__text">
            To return your articles, please contact us first.
          </p>
        </div>
        <div className="retour-container__flex">
          <img src={icon} />
          <p className="retour-container__text">
            Postal charges for retour are not reimbursed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
