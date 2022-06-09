import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-background py-7'>
        <h2 className='text-center contact-heading text-3xl'>Contact me</h2>
       <div className="mx-auto form-width">
       <form action="" className=''>
            <input type="text"  placeholder='Your Name'/><br/>
            <input type="Email"  placeholder='Your Email'/>
            <input type="text"  placeholder='Your Phone number'/>
            <textarea name="" id="" cols="10" rows="10" placeholder='Your message'></textarea>
            <input type="submit" value="Submit" />
        </form>
       </div>
    </div>
  )
}

export default Contact