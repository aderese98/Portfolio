import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Java Developer',
    description:
    'Java Development Engineer with 5 years of experience working on algorithms, data structures, multithreading, and more.',
    link: 'Learn more',
  },
  {
    name: 'Full Stack Developer',
    description:
    'Full Stack Development Engineer with 4 years of experience using JavaScript, React, MangoDB and more.',
    link: 'Learn more',
  },
  {
    name: 'Data Scientist/Engineer',
    description:
    'Mathematician with 3 years of experience with data science, machine learning, database engineering and more.',
    link: 'Learn more',
  }
]

const Services = () => {
  return (
    <section className="section" id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten
          mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'> What I Do</h2>
              <h3 className = 'h3 max-w-[455px] mb-16'>
                With 5 years of development experience I have focussed on:
              </h3>
              <button className='btn btn-sm'>
                <a href='https://github.com/aderese98?tab=repositories'
                target="_blank">See my work</a>
                </button>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3}}>
            <div>
              {services.map((service, index) => {
                const {name, description, link} = service;

                return(
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' 
                  key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider 
                      font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div>
                      <a href='https://github.com/aderese98?tab=repositories' target="_blank" className='btn w-9 h-9 mb-[42px] flex
                      justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='https://github.com/aderese98?tab=repositories' target="_blank" className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
