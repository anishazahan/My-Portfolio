import React from 'react'
import './Contact.css'
import contactImg from '../../../assets/img/Mention-amico (1).png'

const Contact = () => {
  return (
    <div className='contact-background py-12'>
        <h2 className='text-center contact-heading text-3xl my-7'>Contact me</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 max-w-7xl lg:px-17 mx-auto pb-10 gap-0">
        <div className="img rounded-sm ml-12">
          <img src={contactImg} alt="" />
        </div>
      <div className="mx-auto form-width mr-5 ">
       <form action="https://formspree.io/f/myyovplp" method='post' className='mx-auto'>
            <input type="text" name='name' className='' placeholder='Your Name'/><br/>
            <input type="email" name='email'  placeholder='Your Email'/>
            <input type="tel" name='tel' placeholder='Your Phone number'/>
            <textarea name="message" id="" cols="10" rows="10" placeholder='Your message'></textarea>
            <input type="submit" className='submit' value="Submit" />
        </form>
       </div>
      </div>
    </div>
  )
}

export default Contact