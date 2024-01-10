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
    <div className="wrapper">
        <div className="heading-2">
        Why Choose Us?
        </div>
        <div className="Buttons-2">
            <span>We excel with reliability, innovation and customer-centric approach for our quality products.</span>
            <div> Our dedicated team ensures that the solutions provided are dependable and long-term</div>
        </div>
        <div className="special-buttons flex   ">
          <div className="Parent flex mr-9">
            <div className="icon"><Image className="" src={icon} alt="icon" /></div>
            <div className="icon-text">User-Centric <div>Approach</div></div>
          </div>
          <div className="Parent flex mb-9 ml-[70px]">
            <div className="icon"><Image className="w-[60px] h-[60px] l-[226px]" src={image2} alt="icon" /></div>
            <div className="icon-text">Customer <div>Satisfaction</div></div>
          </div>
          <div className="Parent flex ml-[110px]">
            <div className="icon"><Image className="w-[60px] h-[60px] l-[226px]" src={image3} alt="icon" /></div>
            <div className="icon-text">Integrating  <div>Feedback</div></div>
          </div>
        </div>
        <div className="special-buttons flex">
        <div className="Parent flex ml-[135px]">
            <div className="icon"><Image className="w-[60px] h-[60px] l-[226px]" src={image4} alt="icon" /></div>
            <div className="icon-text">High-Quality <div>Product</div></div>
          </div>
          <div className="Parent flex ml-[110px]">
            <div className="icon"><Image className="w-[60px] h-[60px] l-[226px]" src={image5} alt="icon" /></div>
            <div className="icon-text mb-6">On-Time <div>Product Delivery</div></div>
          </div>
        </div>
    </div>
  )
}

export default WhyChoose