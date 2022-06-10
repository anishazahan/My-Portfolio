import React from 'react'
import './Contact.css'
import contactImg from '../../../assets/img/contact.png'

const Contact = () => {
  return (
    <div className='contact-background py-12'>
        <h2 className='text-center contact-heading text-3xl my-7'>Contact me</h2>
      <div className="flex max-w-7xl px-36 pb-10">
        <div className="img rounded-sm">
          <img src={contactImg} alt="" />
        </div>
      <div className="mx-auto form-width ml-0 pl-0">
       <form action="" className=''>
            <input type="text" className='' placeholder='Your Name'/><br/>
            <input type="Email"  placeholder='Your Email'/>
            <input type="text"  placeholder='Your Phone number'/>
            <textarea name="" id="" cols="10" rows="10" placeholder='Your message'></textarea>
            <input type="submit" className='submit' value="Submit" />
        </form>
       </div>
      </div>
    </div>
  )
}

export default Contact