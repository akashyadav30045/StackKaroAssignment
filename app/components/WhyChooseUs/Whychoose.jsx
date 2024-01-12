import React from 'react'
import "./styles.css"
import icon from "./Group395.png"
import Image from 'next/image';
import image2 from "./2.png"
import image3 from "./3.png"
import image4 from "./4.png"
import image5 from "./5.png"


const WhyChoose = () => {
  return (
    <div className=" rounded-lg ">
        <div className="heading-2">
        Why Choose Us?
        </div>
        <div className="Buttons-2">
            <span>We excel with reliability, innovation and customer-centric approach for our quality products.</span>
            <div> Our dedicated team ensures that the solutions provided are dependable and long-term</div>
        </div>
        <div className="special-buttons flex ">
          <div className="Parent flex relative rounded-lg md:m-9 ">
            <div className="icon"><Image className="Images12" src={icon} alt="icon" /></div>
            <div className="icon-text ">User-Centric <div className="ml-1">Approach</div></div>
          </div>
          <div className="Parent flex relative rounded-lg md:m-9 ">
            <div className="icon"><Image className="Images12" src={image2} alt="icon" /></div>
            <div className="icon-text">Customer <div className="ml-1">Satisfaction</div></div>
          </div>
          <div className="Parent flex flex-row rounded-lg relative md:m-9">
            <div className="icon"><Image className="Images12" src={image3} alt="icon" /></div>
            <div className="icon-text">Integrating  <div className="ml-1">Feedback</div></div>
          </div>
        </div>
        <div className="special-buttons flex rounded-lg items-center md:ml-[135px]">
        <div className="Parent flex relative">
            <div className="icon"><Image className="Images12" src={image4} alt="icon" /></div>
            <div className="icon-text">High-Quality <div className="ml-1">Product</div></div>
          </div>
          <div className="Parent flex relative rounded-lg md:ml-[110px]">
            <div className="icon"><Image className="Images12" src={image5} alt="icon" /></div>
            <div className="icon-text md:flex ">On-Product <div className="md:flex">Delivery</div></div>
          </div>
        </div>
    </div>
  )
}

export default WhyChoose