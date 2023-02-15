import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../assets/data/Data.json';
import { MdNavigateNext, MdNavigateBefore, MdCircle } from 'react-icons/md';

const PopularShoes = () => {
  const shoes = data.shoes;

  return (
    <div className='PS-container p-9'>
      <div className='heading flex flex-row justify-between'>
        <h6 className='text-4xl font-bold'>Popular Right Now</h6>
        <div className='space-x-5 text-lg flex item-center justify-center'>
          <button className=''>
            <MdNavigateBefore />
          </button>
          <button className='text-md'>
            <MdCircle />
          </button>
          <button>
            <MdNavigateNext />
          </button>
        </div>
      </div>
      {/* <Swiper> */}
      <div className='slider-container'>
        <h2>Products</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          onSwiper={null}
          className='flex flex-row'
        >
          {shoes.map((product, index) => (
            <SwiperSlide key={index}>
              <img src={product.Img} alt={product.Name} />
              <h3>{product.Name}</h3>
              <p>{product.Price}</p>
              <p>{product.Category}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </Swiper> */}
    </div>
  );
};

export default PopularShoes;
