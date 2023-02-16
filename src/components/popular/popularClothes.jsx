import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../assets/data/Data.json';
import { MdNavigateNext, MdNavigateBefore, MdCircle } from 'react-icons/md';

const PopularShoes = () => {
  const clothes = data.clothes;

  return (
    <div className='PS-container p-9'>
      <div className='heading flex flex-row justify-between'>
        <h6 className='text-4xl font-bold'>Popular Right Now</h6>
        <div
          className={`space-x-5 text-lg flex item-center justify-center ${
            clothes.length < 5 ? 'hidden' : ''
          }`}
        >
          {/* Previous Button */}
          <button className=''>
            <MdNavigateBefore />
          </button>
          <button className='text-md'>
            <MdCircle />
          </button>
          {/* Next Button */}
          <button>
            <MdNavigateNext />
          </button>
        </div>
      </div>

      <div className='slider-container mt-10'>
        {/* <Swiper
          slidesPerView={3}
          navigation
          className='flex flex-row'
        >
          {shoes.map((product, index) => (
            <SwiperSlide key={index}>
              <img src={product.Img} alt={product.Name} className='h-30 auto' />
              <h3>{product.Name}</h3>
              <p>{product.Price}</p>
              <p>{product.Category}</p>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className='flex flex-row space-x-10'>
          {clothes.map((product, index) => (
            <div key={index}>
              <img
                src={product.Img}
                alt={product.Name}
                className='h-30 w-auto'
              />
              <div className='flex justify-between px-2 mt-4'>
                <h3>{product.Name}</h3>
                <span>${product.Price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularShoes;
