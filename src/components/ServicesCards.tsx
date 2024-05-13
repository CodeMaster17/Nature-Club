
import { Link } from 'react-router-dom'
import './ServicesCard.css'
const ServicesCards = () => {
    return (
        <>
            <div className="w-full md:w-[40%] lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-health rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20  flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Health and Nutrition</h1>
                            <p className="text-left font-light  text-sm">

                                Despite modern advancements, the timeless adage "Health is Wealth" remains pertinent.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            <Link to='/services'>
                                Learn More
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[40%]  lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-ecology rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20  flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Ecology and Environment</h1>
                            <p className="text-left font-light md:text-base text-sm">

                                Nature’s Club partners with TERI's Light a Billion Lives program, installing solar lanterns and mobile charging facilities in unelectrified villages of Kendrapara district.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            <Link to='/services'>
                                Learn More
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* disaster */}
            <div className="w-full md:w-[40%] lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-disaster rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20  flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Disaster Risk Reduction</h1>
                            <p className="text-left font-light md:text-base text-sm">
                                Resilient children and resilient communities are the goal of CCDRR.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            <Link to='/services'>
                                Learn More
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* climate change */}
            <div className="w-full md:w-[40%]  lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-climate-change  rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20  flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Climate change And Adaptive Livelihood</h1>
                            <p className="text-left font-light md:text-base text-sm">
                                Climate change is increasingly threatening lives, habitat and livelihood, the most in the circle of Bay of Bengal.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            <Link to='/services'>
                                Learn More
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/*  child rights */}
            <div className="w-full md:w-[40%]  lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-childrights  rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20  flex flex-col justify-between">
                        <div className='w-full'>
                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Child Rights and Child protection</h1>
                            <p className="text-left font-light md:text-base text-sm">
                                The candle of enlightenment, which was lightened by Nature's Club with support from UNICEF
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            <Link to='/services'>
                                Learn More
                            </Link>
                        </button>

                    </div>
                </div>
            </div>
            {/* water */}
            <div className="w-full md:w-[40%]  lg:w-[25%] rounded-2.5xl bg-white">
                <div className="flex flex-col lg:h-[400px] h-[300px] md:h-96 bg-img bg-img-water  rounded-2.5xl relative">
                    <div className="w-full p-4 h-full  text-white absolute z-20  flex flex-col justify-between">
                        <div className='w-full'>

                            <h1 className="text-left mt-8 text-base md:text-2xl font-bold mb-2">Water, Sanitation and Hygiene</h1>
                            <p className="text-left font-light md:text-base text-sm">
                                Ensuring access to clean water and sanitation for all communities is essential for public health and sustainable development.
                            </p>
                        </div>
                        <button className='md:py-2 py-1 px-2 md:px-4 bg-white text-black rounded-[4px] text-sm lg:text-base mb-12 w-1/2'>
                            <Link to='/services'>
                                Learn More
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServicesCards
