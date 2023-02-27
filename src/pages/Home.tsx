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

  tubAnimScrollLock: boolean
  enableTubAnimScrollLock: () => void
  disableTubAnimScrollLock: () => void
}
// Create state for navbar state
export const useStateStore = create<SateStoreInterface>((set, get) => ({
  popOutNav: false,
  enablePopOutNav: () => set({ popOutNav: true }),
  disablePopOutNav: () => set({ popOutNav: false }),

  tubAnimScrollLock: false,
  enableTubAnimScrollLock: () => set({ tubAnimScrollLock: true }),
  disableTubAnimScrollLock: () => set({ tubAnimScrollLock: false })
}))


const Home: React.FC = () => {

  // Functions to update navbar state
  const enablePopOutNav = useStateStore(state => state.enablePopOutNav)
  const disablePopOutNav = useStateStore(state => state.disablePopOutNav)
  
  // Home page effects based on scroll
  const scrollEffects = () => {
    if (window.scrollY >= 40) {enablePopOutNav()} else {disablePopOutNav()}
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

