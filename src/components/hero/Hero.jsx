import React, { useState } from 'react';

const Hero = () => {
  const [rotate, setRotate] = useState(null);

  const toggleRotate1 = () => {
    setRotate(() => (rotate !== 1 ? 1 : null));
  };

  const toggleRotate2 = () => {
    setRotate(() => (rotate !== 2 ? 2 : null));
  };

  const toggleRotate3 = () => {
    setRotate(() => (rotate !== 3 ? 3 : null));
  };

  return (
    <div className='hero pt-28 md:py-0 md:pb-0 border-gray-100 border-b-2'>
      <div className='hero-container  grid grid-cols-1 md:grid-cols-3'>
        {/* Column 1*/}
        <div
          className={`bg-blue-300 hero-col ${
            rotate === 2 ? 'stretch w-1/2' : ''
          }`}
          onClick={toggleRotate2}
        >
          <img
            src='/images/shoe1.png'
            alt='shoe1'
            className={`transition-all duration-500 ${
              rotate === 2 ? 'shoerot' : ''
            }`}
          />
          <span
            className={`text-white text-2xl lg:text-12xl md:text-8xl ${
              rotate === 2 ? 'hero-text' : ''
            }`}
          >
            NEW
          </span>
        </div>

        {/* Column 2*/}
        <div
          className={`bg-white hero-col ${
            rotate === 1 ? 'stretch' : 'normald'
          }`}
          onClick={toggleRotate1}
        >
          <img
            src='/images/shoe2.png'
            alt='shoe2'
            className={`transition-all duration-500 ${
              rotate === 1 ? 'shoerot' : ''
            }`}
          />
          <span
            className={`text-black text-2xl lg:text-12xl md:text-8xl ${
              rotate === 1 ? 'hero-text' : ''
            }`}
          >
            BOLD
          </span>
        </div>

        {/* Column 3*/}
        <div
          className={`bg-pink-400 hero-col ${rotate === 3 ? 'stretch' : ''}`}
          onClick={toggleRotate3}
        >
          <img
            src='/images/shoe3.png'
            alt='shoe3'
            className={`transition-all duration-500 ${
              rotate === 3 ? 'shoerot' : ''
            }`}
          />
          <span
            className={`text-white text-2xl lg:text-12xl md:text-8xl ${
              rotate === 3 ? 'hero-text' : ''
            }`}
          >
            FAST
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
