import React from 'react'
import './Services.css'

import responsiveImg from '../../../assets/img/responsive.svg'
import psdToHtml from '../../../assets/img/psd-t0-html.svg'
import reactJs from '../../../assets/img/react-js.svg'
import wevDev from '../../../assets/img/web_dev.svg'
import webDesign from '../../../assets/img/laptop.svg'
import userInterface from '../../../assets/img/psd.svg'

const Services = () => {



  return (
    <div className='px-20 mb-14 max-w-7xl mx-auto mt-10 mb-20 bg-black'>
        <div className="service text-center mb-10">
        <h2 className=' servicing-heading text-3xl p-7'>My  Services</h2>
        </div>
        <p className=' text-center mb-16'>You will get 100% full service of work assured until you are fully satisfied</p>

        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4">
        <div className="box border border-gray-900 px-4 pb-5 text-center">
                <img className='img-design' src={responsiveImg} alt="" />
                <h2 className='text-2xl service-name'>Responsive design</h2>
                <p className='service-text'>I will make all responsive designs. I know all clients love responsive design. my all work Responsive Design. As a developer we need to complete Responsive design.  </p>
            </div>
        <div className="box border border-gray-900 px-4 pb-5 text-center">
                <img className='img-design' src={webDesign} alt="" />
                <h2 className='text-2xl service-name'>Web design</h2>
                <p className='service-text'>I am working with web design in the last 2 years. Now I have so much experience and I have completed so much design. I have so many clients to work with web design. </p>
            </div>
        <div className="box border border-gray-900 px-4 pb-5 text-center">
                <img className='img-design' src={psdToHtml} alt="" />
                <h2 className='text-2xl service-name'>PSD To HTML</h2>
                <p className='service-text'> I will create Your Website PSD to Html,that is raw code of html and css,and that is faster for roaw code. </p>
            </div>

        <div className="box border border-gray-900 px-4 pb-5 text-center">
                <img className='img-design' src={wevDev} alt="" />
                <h2 className='text-2xl service-name'>Web development</h2>
                <p className='service-text'>I have so much experience in Web Development. Development means Full Website creation. I know and I have so much experience in web site development </p>
            </div>
            <div className="box border border-gray-900 px-4 pb-5 text-center">
                <img className='img-design' src={userInterface} alt="" />
                <h2 className='text-2xl service-name'>UI UX Design</h2>
                <p className='service-text'>I will create Your website beautifull and eye catching and color combination is good. </p>
            </div>
            <div className="box border border-gray-900 px-4 pb-5 text-center important-service">
                <img className='img-design' src={reactJs} alt="" />
                <h2 className='text-2xl service-name'>React Application</h2>
                <p className='service-text'>I will create your website with React.Js.THat is componant base Library,for this reason code minimize and faster.I will use,React Router,Custom Hook,UseHook,State,Context API,Usememo,Usereducer and so on. </p>
            </div>
        </div>
    </div>
  )
}

export default Services