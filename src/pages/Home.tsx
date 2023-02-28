import react from 'react';
import { useState, useEffect } from 'react';
import { create } from 'zustand';
import { motion } from 'framer-motion';

import './Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OM1 from '../components/OM1';
import PreOrder from '../components/PreOrder';
import TileBackground from "../components/TileBackground";
import CountdownPanel from '../components/CountdownPanel';

// Type declaration for Home page state store
export interface SateStoreInterface {
  popOutNav: boolean
  enablePopOutNav: () => void
  disablePopOutNav: () => void

  navbarLogo: boolean
  enableNavbarLogo: () => void
  disableNavbarLogo: () => void

  tubAnimScrollLock: boolean
  enableTubAnimScrollLock: () => void
  disableTubAnimScrollLock: () => void
}
// Create state for navbar state
export const useStateStore = create<SateStoreInterface>((set, get) => ({
  popOutNav: false,
  enablePopOutNav: () => set({ popOutNav: true }),
  disablePopOutNav: () => set({ popOutNav: false }),

  navbarLogo: false,
  enableNavbarLogo: () => set({ navbarLogo: true }),
  disableNavbarLogo: () => set({ navbarLogo: false }),

  tubAnimScrollLock: false,
  enableTubAnimScrollLock: () => set({ tubAnimScrollLock: true }),
  disableTubAnimScrollLock: () => set({ tubAnimScrollLock: false })
}))


const Home: React.FC = () => {

  // Functions to update navbar state
  const enablePopOutNav = useStateStore(state => state.enablePopOutNav)
  const disablePopOutNav = useStateStore(state => state.disablePopOutNav)

  const enableNavbarLogo = useStateStore(state => state.enableNavbarLogo)
  const disableNavbarLogo = useStateStore(state => state.disableNavbarLogo)
  
  // Home page effects based on scroll
  const scrollEffects = () => {
    if (window.scrollY >= 40) {enablePopOutNav()} else {disablePopOutNav()}

    const heroLogo: any = document.getElementById("HeroTitle")?.getBoundingClientRect()
    const navbar: any = document.getElementById("NavbarWrapper")?.getBoundingClientRect()
    if (heroLogo.bottom - 20 < navbar.bottom) {enableNavbarLogo()} else {disableNavbarLogo()}
  }
  // Execute scrolling animations
  useEffect(() => {
    window.addEventListener('scroll', scrollEffects)
  }, [])

  return (
    <div className='HomeContainer' id='HomeWindow'>
      <motion.div className='HomeWrapper' id='HomeWrapper'>
        <Navbar />
        <TileBackground 
        height={window.outerHeight * 0.7} 
        width={window.innerWidth}
        />
        <Hero />
        <CountdownPanel />
        <OM1 />
        <PreOrder />
      </motion.div>
    </div>
  )
}
export default Home

