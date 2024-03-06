
import { IoIosLink } from "react-icons/io";

const MeenaStory = () => {
    return (
        <div className="w-full bg-pale_olive md:pt-8 pt-2 h-[100vh] md:h-[80vh] ">
            <div className="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MEENA'S STORY

                    </h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-fern_green border-0 py-2 px-6 focus:outline-none  rounded-4xl text-lg items-center gap-4">
                            <IoIosLink size={24} />
                            WATCH FULL VIDEO HERE
                        </button>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
            </div>

        </div>
    )
}

export default MeenaStory
