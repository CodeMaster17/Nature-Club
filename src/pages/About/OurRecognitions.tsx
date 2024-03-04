import Heading from "../../components/Heading"

const recognitions = [
    { id: 1, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo saepe libero consequuntur consectetur, maxime eveniet eum corporis adipisci soluta!" },
    { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo saepe libero consequuntur consectetur, maxime eveniet eum corporis adipisci soluta!" },
    { id: 3, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo saepe libero consequuntur consectetur, maxime eveniet eum corporis adipisci soluta!" },
    { id: 4, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo saepe libero consequuntur consectetur, maxime eveniet eum corporis adipisci soluta!" },
    { id: 5, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo sepe libero consequuntur consectetur, maxime eveniet eum corporis adipisci soluta!" },
    { id: 6, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo saepe libero consequuntur consectetur, maxime eveniet eum corporis adipisci soluta!" },
    { id: 7, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo saepe libero consequuntur consectetur, maxime eveniet eum corporis adipisci soluta!" },
    { id: 8, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo saepe libero consequuntur consectetur, maxime eveniet eum corporis adipisci soluta!" },
]

const OurRecognitions = () => {
    return (
        <section className="text-gray-600 body-font bg-navy_blue">
            <div className="container 2xl:w-3/5 w-4/5 py-24 mx-auto">
                <div className="text-center mb-20">
                    {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1> */}
                    <Heading text="OUR RECOGNITIONS" color="white" type="LARGE" />

                </div>
                <div className="flex flex-wrap justify-between gap-4 lg:w-full sm:mx-auto sm:mb-2 ">
                    {recognitions.map((item) => {
                        return (
                            <div className=" sm:w-[45%] w-full" key={item.id}>
                                <div className="bg-federal_blue text-white text-center font-medium rounded flex p-4 h-full items-center">
                                    <span className="title-font font-medium px-8">
                                        {item.text}
                                    </span>
                                </div>
                            </div>)
                    })}
                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Load More</button>
            </div>
        </section>
    )
}

export default OurRecognitions
