import AboutImage from "./AboutImage"
import AboutQuote from "./AboutQuote"
import Acheivements from "./Acheivements"
import Goal from "./Goal"
import OurRecognitions from "./OurRecognitions"

const About = () => {
    return (
        <>
            <section>
                <div className="w-full h-screen relative">
                    <img src="/about/hero-image.png" alt="hero" className="w-full h-full object-cover" />
                    <p className="text-5xl absolute bottom-40 right-1/2 left-1/2 text-white font-bold ">ABOUT US</p>
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
