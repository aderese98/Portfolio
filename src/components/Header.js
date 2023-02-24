import React from 'react';
//images
import Logo from '../assets/logo.png';
import Contact from './Contact';

import { Link } from 'react-scroll';


const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {}
          <Link
          to="contact"
          activeClass='active'
          smooth={true}
          spy={true}>
          <button className='btn btn-sm'>Let's work together!</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
