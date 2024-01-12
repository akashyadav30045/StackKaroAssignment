import React from 'react'
import Image from 'next/image';
import "./TalentStyles.css";
import image1 from "./1.png"
import image2 from "./2.png"
import image3 from "./3.png"
import image4 from "./4.png"
import image5 from "./5.png"
import image6 from "./6.png"




const Talent = () => {
  return (
    <div className="wrapper-7">
        <div className="heading-7 mt-14 ">
          Stackkaroo’s Talent Hiring & Job Placement Services
        </div>
        <div className="Buttons-3 mt-6">
        We are a talent searching platform that redesigns how companies hire talents. It is a cost-effective solution for industries.
            <div> We also provide global job opportunities with good salaries, support, and professional development.</div>
      </div>

      <div className="cards md:m-8 md:ml-2 ">
        <div className="card-5 md:mb-4">
          <div className="flex flex-col daddy1 ">
            <div className="photo-5 mr-3"><Image src={image1} alt="webdev" /></div>
            <div className="website-3 ">Unleashing Top Talent Globally </div>
          </div>
          <span className='card-info-2 flex items-c'>We offer 5% top talents and supports companies hiring from various time zones.</span>
        </div>
        <div className="card-5">
          <div className="flex flex-col daddy1 ">
            <div className="photo-5 mr-3"><Image src={image2} alt="webdev" /></div>
            <div className="website-3 ">Securing Success </div>
          </div>
          <span className='card-info-2 flex items-c'>The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation..</span>
        </div>
        <div className="card-5">
          <div className="flex flex-col daddy1 ">
            <div className="photo-5 mr-3"><Image src={image3} alt="webdev" /></div>
            <div className="website-3 "> Beyond Borders</div>
          </div>
          <span className='card-info-2 flex items-c'>We provide both, flexible full-time and part-time jobs</span>
        </div>
        <div className="card-5">
          <div className="flex flex-col daddy1 ">
            <div className="photo-5 mr-3"><Image src={image4} alt="webdev" /></div>
            <div className="website-3">End-to-End Excellence </div>
          </div>
          <span className='card-info-2 flex items-c'>In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.</span>
        </div>
        <div className="card-5">
          <div className="flex flex-col daddy1 ">
            <div className="photo-5 md:mr-3"><Image src={image5} alt="webdev" /></div>
            <div className="website-3 ">Unleashing Top Talent Globally </div>
          </div>
          <span className='card-info-3 flex items-c'>The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent..</span>
        </div>
        <div className="card-5">
            <div className="photo-5 md:m-3  relative"><Image src={image6} alt="webdev" /></div>
            <div className="website-3 ">Efficiency Redefined </div>
            <span className='card-info-2 flex '>The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.</span>
          </div>
    </div>
        </div>
  )
}

export default Talent