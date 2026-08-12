import React from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home-page">
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

