import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img1 from'../assets/portfolio-img1.png';
import Img2 from'../assets/portfolio-img2.png';
import Img3 from'../assets/portfolio-img3.png';


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3}}
           className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            { /* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
              My Latest <br />
              Work</h2>
              <p className='max-w-sm mb-12'>
                My most recent works includes Java, React and Python applications. 
            </p>
            <button className='btn btn-sm'>
              <a href='https://github.com/aderese98?tab=repositories' target="_blank">
              View all projects
              </a>
              </button>
            </div>
            { /*image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-lg'>
              { /*overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
              transition-all duration-300'></div>
              { /*image */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
              { /*pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                   <a href='https://github.com/aderese98/Java-Multi-threaded-Program' target="_blank">
                   A Java Project
                   </a>
                    </span>
                  </div>
              { /*title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>
                <a href='https://github.com/aderese98/Java-Multi-threaded-Program' target="_blank">
                  Multithreaded Registration Program
                   </a></span>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3}}
           className='flex-1 flex flex-col gap-y-12'>
          { /*image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-lg'>
              { /*overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
              transition-all duration-300'></div>
              { /*image */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
              { /*pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                  <a href='https://github.com/aderese98/Netflix-Clone' target="_blank">
                  A React App
                   </a></span>
                  </div>
              { /*title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>
                  <a href='https://github.com/aderese98/Directed-and-Weighted-Graph' target="_blank">                  
                Netflix Clone
                   </a></span>
              </div>
            </div>
            { /*image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-lg'>
              { /*overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
              transition-all duration-300'></div>
              { /*image */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
              { /*pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    <a href='https://github.com/aderese98/NBA-Player-Analysis-1996-2019' target="_blank">                  
                    A Data Science Project
                   </a></span>
                  </div>
              { /*title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>
                  <a href='https://github.com/aderese98/NBA-Player-Analysis-1996-2019' target="_blank">                  
                  NBA Game Winner Predicition Algorithm
                   </a></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
