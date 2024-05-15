
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Services from './Services';
import MeenaStory from './MeenaStory';
import Quote from './Quote';
import ClimateChampions from './ClimateChampions';

import { Carousel } from "@material-tailwind/react";
import './Home.css'
import Sponsors from "./Sponsors";
const Home = () => {
  return (
    <>
      <div className='w-full lg:h-[100vh] relative'>
        {/* <Navbar /> */}
        <Carousel placeholder={"Placeholder"} className="">
          <img
            src="/hero-image.jpeg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src="/Agriculture_and_livelihood/e63f296c-e666-419c-a5ce-5cec3673a197.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src="/CCDRR/DSC03889.JPG"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="/Child_rights/IMG_1225.JPG"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="/Agriculture_and_livelihood/P1050233.JPG"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
        <p className="lg:text-5xl text-2xl absolute bottom-24 customClass  text-white font-bold mb-20 ">NATURE'S CLUB</p>
      </div>
      <Services />
      <MeenaStory />
      <Quote />
      <ClimateChampions />
      <Sponsors />
    </>
  )
}

export default Home
