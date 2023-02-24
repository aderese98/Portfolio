import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';
import Resume from './Resume';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3}} 
        className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top"></motion.div>
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3}} 
        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>Hello, my name is Abraham Derese. I am a Mathematics and Computer Science student graduating 
            from the University of Maryland College Park.</h3>
            <p>
            I am a software engineer and web developer. I have experience
            in several algorithmic concepts, data structure manipulations and
            full stack programming practices. I am currently working on several projects
            centering around software engineering and agile methodologies as
            well as low level system design using assembly language.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                  {inView ? <CountUp start={0} 
                  end={5} 
                  duration={1.5} /> : null}
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years of experience <br />
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                  {inView ? <CountUp start={0} 
                  end={20} 
                  duration={3} /> : null}
                  +
                  <div className='font-primary text-sm tracking-[2px]'>
                    Projects completed <br />
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                  {inView ? <CountUp start={0} 
                  end={25} 
                  duration={3} /> : null}
                  +
                  <div className='font-primary text-sm tracking-[2px]'>
                    Related courses taken <br />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
          <Link
              to="contact"
              activeClass='active'
              smooth={true}
              spy={true}>
              <button className='btn btn-lg'>Contact me</button>
              </Link>
              <Resume />
        </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
