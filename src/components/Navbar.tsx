import React from "react";

import "./Navbar.css";
import { useStateStore } from '../pages/Home';

const Navbar: React.FC = () => {
  // State for navbar from imported state store
  const popOutNav = useStateStore(state => state.popOutNav)
  const navbarLogo = useStateStore(state => state.navbarLogo)

  // Style object for transparent navbar wrapper
  const invisibleNav: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    border: '1px groove transparent',
    boxShadow: '0px 5px 10px #00000000',
    backdropFilter: 'contrast(100%) brightness(100%) blur(0px)',
    // transition: 'all 0.2s ease',
  }
  // Style object for transparent navbar logo
  const invisibleLogo: React.CSSProperties = {
    color: 'transparent',
    transition: 'all 0.2s ease',
  }

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div className="NavbarContainer">
      <div className="NavbarWrapper" id="NavbarWrapper" style={popOutNav? undefined : invisibleNav}>
        <div className="LeftSide">
          <div className="Button">
            OM-1
          </div>
          <div className="Button">
            Formulation
          </div>
          <div className="Button">
            About
          </div>
        </div>
        <div className="Logo" style={navbarLogo? undefined: invisibleLogo} onClick={scrollToTop}>
          On Mane
        </div>
        <div className="RightSide">
          <div className="Button" onClick={undefined}>
            Pre-Order
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar