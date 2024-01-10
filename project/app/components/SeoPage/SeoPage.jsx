import React from "react";
import Image from "next/image";
import "./SeoStyles.css";
import Tick from './Tick.png'

const SeoPage = () => {
  return (
    <div className="wrapper-2 ">
      <div className="heading-4">SEO Services</div>
      <div className="Daddy flex ">
      <div className="left-right-main flex flex-col mb-8">
        <div className="left-2 flex flex-col ml-12 m-8 mb-1">
            <div className="content-blue flex flex-col">
              <div className="tick flex">
              <Image src={Tick} alt="tick"/>
              </div>
                <span className="text-align mr-[6rem]"> Customized SEO Services</span>

            </div>
            <div className="content-black">
                We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.
            </div>
        </div>
        <div className="left-2 flex flex-col ml-12 m-8">
            <div className="content-blue flex flex-col">
              <div className="tick flex">
              <Image src={Tick} alt="tick"/>
              </div>
                <span className="text-align mr-[8rem]"> Off-Page SEO Services</span>

            </div>
            <div className="content-black">
            We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.
            </div>
        </div>
        <div className="left-2 flex flex-col ml-12 m-8">
            <div className="content-blue flex flex-col">
              <div className="tick flex">
              <Image src={Tick} alt="tick"/>
              </div>
                <span className="text-align mr-[8rem]"> On-Page SEO Services</span>

            </div>
            <div className="content-black">
              We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.
            </div>
        </div>
      </div>
      <div className="right-main left-[20px]">
      <div className="right-2 flex flex-col ml-12 m-8 ">
            <div className="content-blue flex flex-col">
              <div className="tick flex">
              <Image src={Tick} alt="tick"/>
              </div>
                <span className="text-align mr-[9.5rem]"> Mobile SEO Services</span>

            </div>
            <div className="content-black">
            We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.            </div>
        </div>
        <div className="right-2 flex flex-col ml-12 m-8 mb-2">
            <div className="content-blue flex flex-col">
              <div className="tick flex">
              <Image className="icon-4" src={Tick} alt="tick"/>
              </div>
                <span className="text-align mt-10 ml-4 "> Free Website Audit and Strategies</span>

            </div>
            <div className="content-black mt-10">
            We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.   </div>
        </div>
        
      </div>
      </div>
    </div>
      
  );
};

export default SeoPage;
