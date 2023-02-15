import React from 'react';
import { SiNike } from 'react-icons/si';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const menu = [
    { link: 'New & Featured', ref: '#' },
    { link: 'Menu', ref: '#' },
    { link: 'Women', ref: '#' },
    { link: 'Kids', ref: '#' },
    { link: 'Sale', ref: '#' },
  ];

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY > 300);
      });
    };
  }, []);

  return (
    <div className={`navbar ${scroll ? 'scrolled' : ''} `}>
      <div className='nav-container '>
        <div className='flex flex-row justify-between items-center p-6 md:px-20'>
          {/* Logo */}
          <div className='logo'>
            <a href='/'>
              <SiNike size={64} />
            </a>
          </div>

          {/* Menu List */}
          <div className='menu hidden md:flex flex-row space-x-8 items-center justify-center font-medium'>
            {menu.map((x, index) => (
              <a href={x.ref} index={index}>
                {x.link}
              </a>
            ))}
          </div>

          {/* Right Nav Buttons */}
          <div className='hidden md:flex nav-btns space-x-6'>
            <button>
              <MdFavoriteBorder size={32} />
            </button>
            <button>
              <RiShoppingBasket2Line size={32} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className='md:hidden'>
            <HiMenuAlt2 size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
