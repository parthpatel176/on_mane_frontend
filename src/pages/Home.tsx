import react from 'react';
import { useState, useEffect } from 'react';
import { create } from 'zustand';
import { motion } from 'framer-motion';

import './Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OM1 from '../components/OM1';
import PreOrder from '../components/PreOrder';


// Type declaration for Home page state store
interface SateStore {
  popOutNav: boolean
  enablePopOutNav: () => void
  disablePopOutNav: () => void
  preOrderPage: number
  setPreOrderPage: (page: number) => void
}
// Create state for navbar state
export const stateStore = create<SateStore>(set => ({
  popOutNav: false,
  enablePopOutNav: () => set({ popOutNav: true }),
  disablePopOutNav: () => set({ popOutNav: false }),
  preOrderPage: 0,
  setPreOrderPage: (page: number) => set({ preOrderPage: page })
}))


const Home: React.FC = () => {

  // Functions to update navbar state
  const enablePopOutNav = stateStore(state => state.enablePopOutNav)
  const disablePopOutNav = stateStore(state => state.disablePopOutNav)
  const setPreOrderPage = stateStore(state => state.setPreOrderPage)

  
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
      <motion.div className='HomeWrapper'>
        <Navbar />
        <Hero />
        <OM1 />
        <PreOrder />
      </motion.div>
    </div>
  )
}
export default Home

