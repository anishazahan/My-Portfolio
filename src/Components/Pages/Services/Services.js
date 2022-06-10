import React from 'react'
import './Services.css'
import img from '../../../assets/img/Typing-bro.png'

const Services = () => {
  return (
    <div className='px-20 mb-14 max-w-7xl mx-auto'>
        <div className="service text-center mb-10">
        <h2 className=' servicing-heading text-3xl p-7'>My Services</h2>
        </div>
        <p className=' text-center mb-7'>You will get 100% full service of work assured until you are fully satisfied</p>

        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-xl'>Web design</h2>
                <p className='service-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In possimus eligendi cum laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. </p>
            </div>
        <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-xl'>Web design</h2>
                <p className='service-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In possimus eligendi cum laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. </p>
            </div>
        <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-xl'>Web design</h2>
                <p className='service-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In possimus eligendi cum laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. </p>
            </div>
        <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-xl'>Web design</h2>
                <p className='service-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In possimus eligendi cum laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. </p>
            </div>
            <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-xl'>Web design</h2>
                <p className='service-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In possimus eligendi cum laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. </p>
            </div>
            <div className="box shadow-md px-4 pb-5 text-center">
                <img className='img-design' src={img} alt="" />
                <h2 className='text-xl'>Web design</h2>
                <p className='service-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In possimus eligendi cum laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. </p>
            </div>
        </div>
    </div>
  )
}

export default Services