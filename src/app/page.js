// "use client";
import React from 'react'
import Image from "next/image";
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import MovieSection from '@/components/MovieSection';
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <MovieSection />
      <Footer />
    </div>
  )
}

export default Home
