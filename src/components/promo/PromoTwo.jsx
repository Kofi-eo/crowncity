import React from 'react';

const PromoTwo = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center p-9 pt-4 md:pt-8 promo-one-container space-y-6'>
        <h6 className='text-xl md:text-6xl uppercase font-black'>Fresh Air</h6>
        <span className='text-xl flex flex-col'>
          <span>
            With its heritage track look and innovative Air design, the
          </span>
          <span>Air Max SC brings iconic comfort to your everyday style</span>
        </span>

        <div className='space-x-6'>
          <button className='text-white text-lg font-semibold bg-black rounded-full p-4 px-8'>
            Shop Men&apos;s
          </button>
          <button className='text-white text-lg font-semibold bg-black rounded-full p-4 px-8'>
            Shop Women&apos;s
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoTwo;
