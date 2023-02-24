import React from 'react';
// images
import Image from '../assets/avatar.png';
//icons
import { FaGithub, FaLinkedin, FaUniversity} from 'react-icons/fa';
//type animation
import {TypeAnimation} from 'react-type-animation';
//motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';
import Resume from './Resume';

const Banner = () => {
  return(
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className = 'flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* Text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden"
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8]
            lg:text-[110px]'>
              ABRAHAM <span>DERESE</span></motion.h1>
            <motion.div
            variants={fadeIn('up', 0.3)} 
            initial="hidden"
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
             className='mb-6 text-[26px] lg:text-[40px] font-secondary
            font-semibold uppercase leading-[1] flex flex-col'>
              <span className='text-white mr-4'>I am a </span>
              <TypeAnimation sequence={[
                'Software Developer',
                2000,
                'Mathematician',
                2000,
                'Student',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}/>
            </motion.div>
            <motion.p
            variants={fadeIn('up', 0.3)} 
            initial="hidden"
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}             
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
            My objective is to provide the best possible service to my employer and to show how 
            heavily I can apply myself to all career opportunities that are given to me.
            </motion.p>
            {/* Buttons */}
            <motion.div
            variants={fadeIn('up', 0.3)} 
            initial="hidden"
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}             
            className='flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0'>
              <Link
              to="contact"
              activeClass='active'
              smooth={true}
              spy={true}>
              <button className='btn btn-lg'>Contact me</button>
              </Link>
              { /* <Resume /> */}
            </motion.div>
            <motion.div
            variants={fadeIn('up', 0.3)} 
            initial="hidden"
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}             
            className='flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0'>
              <a href='https://www.linkedin.com/in/abraham-derese-a8577717a/'
              target="_blank">
                <FaLinkedin />
              </a>
              <a href='https://github.com/aderese98' target="_blank">
                <FaGithub />
              </a>
              <a href='https://umd-csm.symplicity.com/students/psx/profile' target="_blank">
                <FaUniversity />
              </a>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
          variants={fadeIn('down', 0.3)} 
          initial="hidden"
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}}           
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
