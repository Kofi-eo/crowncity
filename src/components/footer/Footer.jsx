import React from 'react';

const Footer = () => {
  return (
    <div className='footer bg-gray-300'>
      <div className='footer-main grid-cols-2'>
        <div>x</div>
        <div>y</div>
      </div>
      <div className='policies mt-4 p-12 flex flex-row justify-between'>
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
