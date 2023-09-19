import "./PaymentDetails.css";

const PaymentDetails = () => {
  return (
    <div className="payment-details__container">
      <h1>Delivery Details</h1>
      <div>
        <p className="paragraph-heading">Shipping address</p>
        <p>3 Falahi st , Falahi avenue,</p>
        <p>Pasdaran Blvd, Fars Province,</p>
        <p>Shiraz</p>
        <p>71856-95159</p>
        <p>Iran</p>
      </div>
      <div>
        <p className="paragraph-heading">Billing address</p>
        <p>Same as shipping address</p>
      </div>
      <div>
        <p className="paragraph-heading">Contact information</p>
        <p>something@gmail.com</p>
      </div>
      <button>edit details</button>
    </div>
  );
};

export default PaymentDetails;
