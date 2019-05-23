import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

function Home() {
  return (
    <Hero>
      <Banner title="Luxurious rooms" subtitle="Deluxe rooms start ing at $299">
        <Link to="/rooms" className="btn-primary">Our rooms</Link>
      </Banner>
    </Hero>
  )
}

export default Home
