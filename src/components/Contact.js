import React, { useRef } from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_suvzpwq', 'template_28yignl', form.current, 'AgIG9dw5Zqg4gEgwH')
      .then((result) => {
          alert("Email sent successfully!");
          console.log(result.text);
      }, (error) => {
          alert("Email not sent!");
          console.log(error.text);
      });
  };
  return(
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3}}
        className='flex flex-col lg:flex-row'>
          {/* text */}
          <div
           className='flex-1'>
            <div >
              <h4 className='text-x1 uppercase text-accent
              font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[75px] lg:text-[90-px] leading-none mb-12'>
                Let's work <br /> together!</h2>
            </div>
          </div>
          { /* form */}
          <form 
          ref={form}
          onSubmit={sendEmail} 
          className='flex-1 border rounded-lg flex flex-col gap-y-6
          pb-24 p-6 items-start'>
            <input 
            className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all' 
            type='text'
            name='user_name'
            placeholder='Your name' required />
            <input 
            className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all' 
            type='email' 
            name='user_email'
            placeholder='Your email' required />
            <textarea className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all'
            name='message'
            placeholder='Your message' required></textarea>
            <button className='btn btn-lg'>
              <input type="submit" value="" />
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
