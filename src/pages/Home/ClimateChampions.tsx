
import { Carousel } from "@material-tailwind/react";
const ClimateChampions = () => {
    return (
        <section className="w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 xs:w-full">
                <Carousel placeholder={"Placeholder"} className="">
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
                        src="/home/5.jpeg"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </div>
            <div className="md:w-1/2 xs:w-full bg-white p-4 md:p-8 xs:flex-col flex md:flex-row justify-center items-center text-center">
                <div className="w-4/5 md:w-full ">

                    <h1 className="md:text-3xl xs:text-2xl text-navy_blue tracking-wider">CLIMATE CHAMPIONS</h1>
                    <p className="md:text-lg mt-4 xs:text-base">
                        Our climate champions are the people who have made a significant impact in the fight against climate change. They have been working tirelessly to make the world a better place for all of us. We are proud to have them as a part of our community.
                        <br />
                        Our climate champions are the people who have made a significant impact in the fight against climate change. They have been working tirelessly to make the world a better place for all of us. We are proud to have them as a part of our community.
                    </p>
                    {/* <NavLink to="/about">READ MORE</NavLink> */}

                </div>
            </div>
        </section>
    )
}

export default ClimateChampions
