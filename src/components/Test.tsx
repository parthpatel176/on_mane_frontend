import React from "react";

import "./Test.css"

const Test: React.FC = () => {
  return (
    <div className="Container">
      <div className="InnerFrame">
        <code className="GreyText">code</code>
        <code className="BlueText">this</code>
      </div>
      <div className="InnerFrame" style={{justifyContent: 'left'}}>
        <code className="BlueText">for</code>
        <code className="GreyText" style={{paddingLeft: '0.25em'}}>me</code>
      </div>
    </div>
  )
}
export default Test