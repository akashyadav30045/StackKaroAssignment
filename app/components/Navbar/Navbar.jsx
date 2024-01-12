import Link from 'next/link';
import "./styles.css"
import Image from 'next/image';
import box from './box.png'


const Navbar = () => {
  return (
    <div className="nav bg-white flex justify-between p-5 ">
      <div className="box">
          <Image src={box} alt='box'/>
        </div>
      <div className=" main bg-white flex items-center  ">
        <div className="flex items-center space-x-16 justify-evenly ">
          <Link href="/">
            <div className="circle flex content-center ">
            <span className="Home ">Home</span>
            </div>
          </Link>
          <Link href="/about">
            <span className=" About cursor-pointer">About us</span>
          </Link>
          <Link href="/work">
            <span className="Work cursor-pointer">Work</span>
          </Link>
          <Link href="/services">
            <span className="Services cursor-pointer">Services</span>
          </Link>
          <Link href="/clients">
            <span className="Clients cursor-pointer">Clients</span>
          </Link>
          <Link href="/team">
            <span className="Team cursor-pointer">Team</span>
          </Link>
          <Link href="/contact">
            <span className="Contact-Us cursor-pointer">Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
