import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import OurStory from './components/OurStory/OurStory'
import WhyChoose from './components/WhyChooseUs/Whychoose'
import DigitalServices from './components/DigitalServices/DigitalServices'
import SeoPage from './components/SeoPage/SeoPage'
import Talent from './components/TalentHiring/Talent'



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <OurStory/>
      <WhyChoose/>
      <DigitalServices/>
      <SeoPage/>
      <Talent/>
    </div>
  )
}
