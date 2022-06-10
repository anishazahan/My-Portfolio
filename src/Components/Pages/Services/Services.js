import React from 'react'
import './Services.css'
import img from '../../../assets/img/Typing-bro.png'
import responsiveImg from '../../../assets/img/responsive.svg'
import developmentImg from '../../../assets/img/development.svg'

const Services = () => {
  return (
    <div className='px-20 mb-14 max-w-7xl mx-auto'>
        <div className="service text-center mb-10">
        <h2 className=' servicing-heading text-3xl p-7'>My Services</h2>
        </div>
        <p className=' text-center mb-9'>You will get 100% full service of work assured until you are fully satisfied</p>

        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4">
        <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={responsiveImg} alt="" />
                <h2 className='text-2xl service-name'>Responsive design</h2>
                <p className='service-text'>I will make all responsive designs. I know all clients love responsive design. my all work Responsive Design. As a developer we need to complete Responsive design.  </p>
            </div>
        <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-2xl service-name'>Web design</h2>
                <p className='service-text'>I am working with web design in the last 2 years. Now I have so much experience and I have completed so much design. I have so many clients to work with web design. </p>
            </div>
        <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-xl service-name'>Web design</h2>
                <p className='service-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In possimus eligendi cum laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. </p>
            </div>

        <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={developmentImg} alt="" />
                <h2 className='text-xl service-name'>Web development</h2>
                <p className='service-text'>I have so much experience in Web Development. Development means Full Website creation. I know and I have so much experience in web site development </p>
            </div>
            <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-xl service-name'>Web design</h2>
                <p className='service-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In possimus eligendi cum laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. </p>
            </div>
            <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-xl service-name'>Web design</h2>
                <p className='service-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In possimus eligendi cum laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. </p>
            </div>
        </div>
    </div>
  )
}

export default Services