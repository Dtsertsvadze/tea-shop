import { useEffect, useState } from "react";
import "./Address.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  postCode: string;
  city: string;
  country: string;
}

interface AddressProps {
  onFormValidityChange: (isValid: boolean) => void;
}

const Address = ({ onFormValidityChange }: AddressProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    postCode: "",
    city: "",
    country: "Country",
  });

  const checkFormValidity = () => {
    // Add your validation rules here
    const isFirstNameValid = formData.firstName.trim() !== "";
    const isLastNameValid = formData.lastName.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isStreetValid = formData.street.trim() !== "";
    const isPostCodeValid = formData.postCode.trim() !== "";
    const isCityValid = formData.city.trim() !== "";
    const isCountryValid = formData.country !== "Country";

    // Check if all fields are valid
    const isValid =
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isStreetValid &&
      isPostCodeValid &&
      isCityValid &&
      isCountryValid;

    onFormValidityChange(isValid);
  };

  useEffect(() => {
    checkFormValidity();
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="address-container">
      <div className="shipping-address">
        <form className="shipping-address__form">
          <h1>Shipping Address</h1>
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <input
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            placeholder="Street and"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
          <div>
            <input
              placeholder="Post Code"
              name="postCode"
              value={formData.postCode}
              onChange={handleInputChange}
            />
            <input
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <select
            placeholder=""
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          >
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
            <p>Bill to a different address</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Address;
