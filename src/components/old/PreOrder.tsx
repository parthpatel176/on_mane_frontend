import React from "react";
import { motion } from 'framer-motion';
import "./PreOrder.css";

import ExitButton from "./ExitButton";
import { stateStore } from '../../pages/Home';
import TextInput from "./TextInput";
import StripeCheckout from "../StripeCheckout";

// const PreOrder: React.FC = () => {

//   // Function and state var for preorder modal
//   const togglePreOrder = stateStore(state => state.togglePreOrder)
//   const showPreOrder = stateStore(state => state.showPreOrder)

//   const invisiblePreOrderContainer = {
//     zIndex: -1000,
//     opacity: 0,
//   }
//   const invisiblePreOrderWrapper = {
//     border: '1px groove transparent',
//     boxShadow: '0px 5px 10px #00000000'
//   }

//   return (
//     <div className="PreOrderContainer"
//     style={showPreOrder? undefined : invisiblePreOrderContainer}>
//       <div className="PreOrderWrapper"
//       style={showPreOrder? undefined : invisiblePreOrderWrapper}>
//         <div className="ToolBar">
//           <ExitButton onClick={togglePreOrder} />
//         </div>
//         <div className="Header" style={showPreOrder? {opacity: 100} : {opacity: 0}}>
//           Pre-Order the first batch now!
//         </div>
//         <div className="InputForm">
//           <TextInput defaultText="Full name" animateTrigger={showPreOrder} />
//           <TextInput defaultText="Email" animateTrigger={showPreOrder} />
//           <TextInput defaultText="Street address" animateTrigger={showPreOrder} />
//           <TextInput defaultText="City" animateTrigger={showPreOrder} />
//           <TextInput defaultText="State" animateTrigger={showPreOrder} />
//           <TextInput defaultText="Postcode" animateTrigger={showPreOrder} />
//         </div>
//         <StripeCheckout />
//         <div className="Footer" />
//       </div>
//     </div>
//   )
// }
// export default PreOrder
