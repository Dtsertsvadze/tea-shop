import "./Address.css";

const Address = () => {
  return (
    <div className="address-container">
      <div className="shipping-address">
        <form className="shipping-address__form">
          <h1>Shipping Address</h1>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email Address" />
          <input placeholder="Street and" />
          <div>
            <input placeholder="Post Code" />
            <input placeholder="City" />
          </div>
          <select placeholder="">
            <option>Country</option>
            <option>Georgia</option>
            <option>USA</option>
            <option>Great Britain</option>
            <option>Africa</option>
          </select>
        </form>
      </div>
      <div className="billing-address">
        <h1>Billing Address</h1>
        <p>(same as shipping address)</p>
        <div>
          <input type="checkbox" id="address" />
          <label htmlFor="address" id="address">
            <p>Bill to different address</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Address;
