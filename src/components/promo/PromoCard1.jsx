import React from 'react';

const PromoCard1 = () => {
  return (
    <div className='pt-7'>
      <div className='promo-card flex flex-col justify-center items-start text-white p-20 space-y-9'>
        <h6 className='text-xl md:text-6xl uppercase font-bold space-y-10'>
          <span>STYLES TO FALL </span>
          <br />
          <span>IN LOVE WITH</span>
        </h6>
        <span className='text-xl flex flex-col'>
          <span>Find Something Better Than Roses</span>
        </span>
        <button className='text-black text-lg font-semibold bg-white rounded-full p-4 px-8'>
          Shop
        </button>
      </div>
    </div>
  );
};

export default PromoCard1;
