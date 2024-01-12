import React from 'react';
import "./styles.css";
import Right from "./right.png";
import Image from 'next/image';
import call from './call.png';

const Body = () => {
  return (
    <div className="wrapper rounded-lg">
      <div className="content">
          <div className="left">
          <span className="flex  content-left-heading">Diversifying the Designs of Digital World</span>
          <div className='content-left-text'>
            Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development.
            In the market, EISPL has a strong presence in providing quality services to its clients.
            <div className="mt-2">
              EISPL is convinced that one should diversify the offering, given the changing needs of the clients.
              That is why we engage in multiple projects and activities.
              We also possess knowledge in web development, app development, UI/UX design, as well as digital marketing.
            </div>
            <Image className="Home-2" src={call} alt="call"/>
          </div>
          </div>
        <div className="content-right ">
          <Image className="image" src={Right} alt="Right-Image" />
        </div>
      </div>
      </div>
  );
};

export default Body;
