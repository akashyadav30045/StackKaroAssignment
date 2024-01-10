import React from 'react'
import "./styles.css";
import Image from 'next/image';
import Right from "./right.png"
import img from "./second.png"

const OurStory = () => {
  return (
    <div className="wrapper">
      <div className="buttons m-5">
        In the realm of digital solutions, we offer expertise in
      </div>
      <div className="services">
          <span className="service">Website Development</span>
          <span className="service">App Development</span>
          <span className="service">UI/UX Design</span>
          <span className="service">Digital Marketing</span>
          <span className="service">SEO Optimization</span>
      </div>
      <div className="buttons-end m-5">
        <span >showcasing our proficiency across various facets of the digital platform </span>
      </div>
      <div className="heading flex flex-col ">
        Stay Ahead!
        <div>Launch Your Next Project with Stackkaroo</div>
      </div>
      <div className="content-new">
        <div className="content-left flex flex-col">
          <span className="content-left-heading-2"> Our Story</span>
          <div className='content-left-text-1 '>
              Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans.
               Our team is fueled by innovation, continually striving to exceed customer expectations.
            <div className="mt-4">
              Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN).
             Our active status and an authorized share capital of Rs 10.00 lac are a source of pride.
            </div>
            <div>
                <Image className="cost h-[70px] w-[300px] mt-2" src={img}/>
            </div>
          </div>
        </div>
        <div className="content-right">
          <Image  className="image" src={Right} alt="Right-Image" />
        </div>
      </div>
    </div>
  )
}

export default OurStory