
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Services from './Services';
import MeenaStory from './MeenaStory';
import Quote from './Quote';
import ClimateChampions from './ClimateChampions';
import Sponsors from "./Sponsors";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <>
      <div className='w-full lg:h-[100vh] border-2 border-red-500'>
        {/* <Navbar /> */}
        {/* <Carousel showArrows={true} showThumbs={false}
        autoPlay
        infiniteLoop
        // interval={2000}
        showStatus={false}
        className='z-0 w-full h-[100vh] object-center'
        >
        <div className='h-[100vh] w-full'>
        <img src="/home/1.png" className='w-full h-[100vh]' />
        <p className="legend">
        
        We are a non-profit working towards achieving a sustainable community.
        </p>
        </div>
        <div>
        <img src="/home/2.png" />
        <p className="legend">Legend 2</p>
        </div>
        
      </Carousel> */}
      </div>
      <Services />
      <MeenaStory />
      <Quote />
      <ClimateChampions />
      <Sponsors />
      <Footer />
    </>
  )
}

export default Home
