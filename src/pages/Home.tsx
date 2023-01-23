import react from 'react';
import { useState, useEffect } from 'react';
import { create } from 'zustand';
import { motion } from 'framer-motion';

import './Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OpenTub from '../components/OpenTub';
import PreOrder from '../components/PreOrder';


// Type declaration for Home page state store
interface SateStore {
  popOutNav: boolean
  enablePopOutNav: () => void
  disablePopOutNav: () => void
  showPreOrder: boolean
  togglePreOrder: () => void
}
// Create state for navbar state
export const stateStore = create<SateStore>(set => ({
  popOutNav: false,
  enablePopOutNav: () => set({ popOutNav: true }),
  disablePopOutNav: () => set({ popOutNav: false }),
  showPreOrder: false,
  togglePreOrder: () => set((state) => ({ showPreOrder: !state.showPreOrder })),
}))


const Home: React.FC = () => {

  // Functions to update navbar state
  const enablePopOutNav = stateStore(state => state.enablePopOutNav)
  const disablePopOutNav = stateStore(state => state.disablePopOutNav)
  // State for navbar popout
  const popOutNav = stateStore((state: any) => state.popOutNav)
  // State for pre-order modal
  const showPreOrder = stateStore((state: any) => state.showPreOrder)
  // Set scrolling on root element based on pre-order modal
  showPreOrder? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  // Home page effects based on scroll
  const scrollEffects = () => {
    if (window.scrollY >= 40) {enablePopOutNav()} else {disablePopOutNav()}
  }
  // Execute scrolling animations
  useEffect(() => {
    window.addEventListener('scroll', scrollEffects)
  }, [])

  return (
    <div className='HomeContainer'>
      <motion.div className='HomeWrapper' >
        <PreOrder />
        <Navbar />
        <Hero />
        <motion.div className='Body' animate={popOutNav ? {y: -50} : {y: 0}} transition={{duration: 0.2}} >
          <OpenTub />
        </motion.div>
      </motion.div>
    </div>
  )
}
export default Home

