import AboutImage from "./AboutImage"
import AboutQuote from "./AboutQuote"
import Acheivements from "./Acheivements"
import Goal from "./Goal"
import OurRecognitions from "./OurRecognitions"

const About = () => {
    return (
        <>
            <section>
                <div className="w-full  h-[50vh] md:h-screen  cover-image flex justify-center items-end " >
                    {/* <img src="/about/hero-image.png" alt="hero" className="w-full h-full object-cover" /> */}
                    <p className="lg:text-5xl text-2xl  text-white font-bold mb-20 ">ABOUT US</p>
                </div>
            </section>
            <Goal />
            <AboutImage />
            <OurRecognitions />
            <AboutQuote />
            <Acheivements />
        </>
    )
}

export default About
