
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Services from './Services';
import MeenaStory from './MeenaStory';
import Quote from './Quote';
import ClimateChampions from './ClimateChampions';
import Sponsors from "./Sponsors";
import { Carousel } from "@material-tailwind/react";

const Home = () => {
  return (
    <>
      <div className='w-full lg:h-[100vh] border-2 border-red-500'>
        {/* <Navbar /> */}
        <Carousel placeholder={"Placeholder"} className="mt-[10vh] md:mt-0">
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
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
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
