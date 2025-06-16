import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import PortfolioDetails from './PortfolioDetails';
import Contact from './Contact';
import Footer from './Footer';


export default function Body() {
    return (
        <main className="ml-72 bg-gray-100 min-h-screen">
            <Hero />
            <About />
            <Skills />
            <PortfolioDetails />
            <Contact />
            <Footer />
        </main>
    );
} 