
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
            src="/home/5.jpeg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src="/home/4.jpeg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src="/home/1.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="/home/2.png"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="/home/3.jpeg"
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
