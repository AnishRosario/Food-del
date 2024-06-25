import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/StoreContext";
const Placeorder = () => {
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Lastname" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zipcode" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="phone" placeholder="Phone" />
      </div>
      <div className="placeorder-right">
      <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-totals-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-totals-detail">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-totals-detail">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
