import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div className='contact-background py-12'>
        <h2 className='text-center contact-heading text-3xl my-7'>Contact me</h2>
      <div className="mx-auto form-width w-11/12 md:w-4/6 lg:w-6/12  ">
       <form action="https://formspree.io/f/myyovplp" method='post' className='mx-auto'>
            <input type="text" name='name' className='placeholder-white text-white' placeholder='Your Name'/>
            <input type="email" name='email'  className='placeholder-white text-white' placeholder='Your Email'/>
            <input type="tel" name='tel' className='placeholder-white text-white' placeholder='Your Phone number'/>
            <input type="tel" name='tel' className='placeholder-white text-white' placeholder='Your Address'/>
            <textarea className='w-full placeholder-white text-white' name="message" id="" cols="10" rows="10" placeholder='Your message'></textarea>
            <input type="submit" className='submit' value="Submit" />
        </form>
       </div>
      </div>
   
  )
}

export default Contact