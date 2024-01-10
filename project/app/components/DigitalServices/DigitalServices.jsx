import React from 'react';
import './DigitalStyles.css';
import Image from 'next/image';

import Image1 from './1.png';
import Image2 from './2.png';
import Image3 from './3.png';
import Image4 from './4.png';
import Image5 from './5.png';
import Image6 from './6.png';
import arrow from './arrow.png';

const DigitalServices = () => {
  return (
    <div className="wrapper">
      <div className="heading-3 mt-14">
        Stackkaroo’s Digital Services
      </div>
      <div className="Buttons-3 mt-4">
        We excel with reliability, innovation and a customer-centric approach for our quality products.
        <div>Our dedicated team ensures that the solutions provided are dependable and long-term</div>
      </div>
      <div className="cards m-8 ml-2">
        <div className="card">
          <div className="flex flex-row ">
            <div className="photo mr-3"><Image src={Image1} alt="webdev" /></div>
            <div className="website">Website <div></div> Development</div>
          </div>
          <span className='card-info flex items-c'>We specialize in responsive website development, ensuring optimal performance across various devices.</span>
          <div className="arrow">
            <Image src={arrow} alt='arrow' />
          </div>
        </div>
        <div className="card">
          <div className="flex flex-row justify-evenly">
            <div className="photo"><Image src={Image2} alt="webdev" /></div>
            <div className="website">App <div></div>Development</div>
          </div>
          <span className='card-info flex items-center'>We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.</span>
          <div className="arrow">
            <Image src={arrow} alt='arrow' />
          </div>
        </div>
         <div className="card ml-3">
          <div className="flex flex-row justify-evenly">
            <div className="photo mr-3"><Image src={Image3} alt="webdev" /></div>
            <div className="website">Software <div></div>Development</div>
          </div>
          <span className='card-info flex items-c'> We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.</span>
          <div className="arrow">
            <Image src={arrow} alt='arrow' />
          </div>
        </div>

      </div>
      <div className="cards m-10 ml-3">
        <div className="card">
          <div className="flex flex-row justify-evenly">
            <div className="photo "><Image src={Image4} alt="webdev" /></div>
            <div className="website">UI/UX <div></div>Design</div>
          </div>
          <span className='card-info flex items-center'> We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.</span>
          <div className="arrow">
            <Image src={arrow} alt='arrow' />
          </div>
        </div>
        <div className="card">
          <div className="flex flex-row justify-evenly">
            <div className="photo"><Image src={Image5} alt="webdev" /></div>
            <div className="website">Digital <div></div>Marketing</div>
          </div>
          <span className='card-info flex items-c'>We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.</span>
          <div className="arrow">
            <Image src={arrow} alt='arrow' />
          </div>
        </div>
         <div className="card">
          <div className="flex flex-row justify-evenly">
            <div className="photo"><Image src={Image6} alt="webdev" /></div>
            <div className="website">SEO <div></div>Optimization</div>
          </div>
          <span className='card-info flex items-c'>We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience.</span>
          <div className="arrow">
            <Image src={arrow} alt='arrow' />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default DigitalServices;
