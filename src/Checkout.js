import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Coupons/ART/Diwali-18/stripe_pc._CB483582784_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
        </div>
      </div>

      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
