import React from 'react';
import Hero from '../components/Home/Hero';
import Brand from '../components/Brand'

function features() {
  return (
    <div>
      <Hero heading="All the features you need" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." buttonMain="View Pricing" img="Features/hero__main.svg" link="/pricing" />
      <Brand/>
    </div>
  );
}

export default features;
