
import './ServicesCard.css'
const ServicesCards = () => {
    return (
        <>
            <div className="w-full md:w-[40%] lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-health rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20 border-2 flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Health and Nutrition</h1>
                            <p className="text-left font-light  text-sm">

                                Nature’s Club combats Odisha's child malnutrition (45%), focusing on hard-to-reach areas. Initially centered on children and mothers, it now emphasizes adolescent health, particularly of future mothers.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[40%]  lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-ecology rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20 border-2 flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Project Anand</h1>
                            <p className="text-left font-light md:text-base text-sm">

                                Project Anand supports children affected by HIV/AIDS in Kendrapara with nutrition, education, and hygiene kits, emphasizing care and reducing stigma.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/* disaster */}
            <div className="w-full md:w-[40%] lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-disaster rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20 border-2 flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Targeted Intervention Project</h1>
                            <p className="text-left font-light md:text-base text-sm">
                                Nature’s Club's TI project in Keonjhar, since March 2009, engages 200 FSWs and 150 MSWs, achieving behavior change in safe sex practices.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/* livelihood */}
            <div className="w-full md:w-[40%]  lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-livelihood  rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20 border-2 flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Clean energy solution</h1>
                            <p className="text-left font-light md:text-base text-sm">
                                Nature’s Club partners with TERI in the Light a Billion Lives program since 2009, bringing green energy to unelectrified villages in Kendrapara with 22 solar lantern units and 27 solar mobile charging facilities.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/* women and children */}
            <div className="w-full md:w-[40%]  lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-women  rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20 border-2 flex flex-col justify-between">
                        <div className='w-full'>
                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Resilient Livelihood</h1>
                            <p className="text-left font-light md:text-base text-sm">
                                Climate change threatens Bay of Bengal communities. Bhitarkanika Wildlife Sanctuary prioritizes livelihood protection in its agrarian, one-crop rain-fed paddy, and fishing-dependent area.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            Learn More
                        </button>

                    </div>
                </div>
            </div>
            {/* climate champions */}
            <div className="w-full md:w-[40%]  lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-climate  rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20 border-2 flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Child rights and child protection</h1>
                            <p className="text-left font-light md:text-base text-sm">
                                Nature’s Club, supported by UNICEF, ignited enlightenment in the backward G.P. Baradia, sparking a ripple effect for girls' rights.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServicesCards
