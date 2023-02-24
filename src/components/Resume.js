import React, { useState } from 'react';
import "./Modal.css";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img4 from'../assets/resume.png';

export default function Resume() {
  const [modal, setModal] = useState(false);
  const toggelModal = () => {
    setModal(!modal);
  }

  if(modal){
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
    <button
    onClick={toggelModal}
    className="btn btn-lg">
        My Resume
    </button>
    {modal && (
    <motion.div
    variants={fadeIn('up', 0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.3}} 
    className="modal"
    onClick={toggelModal}>
    <div 
    className=""></div>
        <div className="flex flex-1 flex-col items-center model-content">
        <div className='lg:flex flex-1 max-w-[720px] lg:max-w-[582px]'>
        <img src={Img4} alt=''/>
        </div>
        <a href={Img4} target="_blank" className='text-gradient btn-link'>Open PDF</a>
            <button className="btn btn-lg close-modal" 
            onClick={toggelModal}>Close</button>
        </div>
    </motion.div>
    )}
    </>
  )
}
