import React from 'react';
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer bg-gray-300'>
      <div className='px-24 py-8 pt-32 footer-main grid grid-cols-2'>
        <div>
          <img src='hj.jpg' alt='logo' className='mb-5' />
          <span className='my-15'>
            <p>We believe brand interaction is key in</p>
            <p> communication. Real innovations and</p>
            <p>a positive.</p>
          </span>
          <div className='socials flex flex-row text-2xl space-x-2 mt-5'>
            <AiFillInstagram /> <AiFillTwitterSquare /> <AiFillYoutube />
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div>
            <h2 className='text-lg font-medium pb-4'>About Us</h2>
            <ul className='space-y-4 text-gray-500'>
              <li>Features</li>
              <li>FAQs</li>
              <li>News</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-medium pb-4'>Company</h2>
            <ul className='space-y-4 text-gray-500'>
              <li>Core values</li>
              <li>Partner w/ us</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='space-y-2 pb-4'>
            <h2 className='text-lg font-medium'>Get in Touch</h2>
            <form className='space-y-3'>
              <input
                placeholder='Your email Here'
                className='p-2 w-full'
              ></input>
              <button className='text-white bg-black p-2 w-full'>
                Get Access
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='policies mt-4 p-12 px-24 flex flex-row justify-between'>
        <div>
          <a href={''}> TravelAgent &copy; 2023 All Rights Reserved</a>
        </div>
        <div className='space-x-5'>
          <a href={''}> Terms of Services</a>
          <a href={''}> Privacy Policy </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
