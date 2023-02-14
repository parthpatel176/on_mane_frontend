import React from "react";
import { motion } from 'framer-motion';
import "./PreOrder.css";

import TextInput from "./TextInput";
import StripeCheckout from "./StripeCheckout";

const PreOrder: React.FC = () => {

  return (
    <div className="PreOrderContainer">
      <div className="PreOrderWrapper">
        <div className="Header">
          Pre-Order first batch
        </div>
        <div className="InputForm">
          <TextInput defaultText="Full name" />
          <TextInput defaultText="Email" />
          <TextInput defaultText="Street address" />
          <TextInput defaultText="City" />
          <TextInput defaultText="State" />
          <TextInput defaultText="Postcode" />
        </div>
        <StripeCheckout />
        <div className="Footer" />
      </div>
    </div>
  )
}
export default PreOrder
