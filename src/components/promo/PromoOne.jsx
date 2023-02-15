import React from 'react';

const PromoOne = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center p-9 pt-9 md:pt-32 promo-one-container space-y-6'>
        <h6 className='text-xl md:text-6xl uppercase font-black'>
          Introducing the New
        </h6>
        <h6 className='text-xl md:text-6xl uppercase font-extrabold'>
          Nike Invicible 3
        </h6>
        <span className='text-xl'>
          ZoomX cushioning designed to help you,stay on your feet today,
          tomorrow, and beyond.
        </span>
        <button className='text-white text-lg font-semibold bg-black rounded-full p-4 px-8'>
          Shop
        </button>

        <div className='pt-9 md:pt-32'>
          <img src='/images/shoeRED.jpg' alt='nike invisible 3' />
        </div>
      </div>
    </div>
  );
};

export default PromoOne;
