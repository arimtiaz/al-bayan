import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default Home;