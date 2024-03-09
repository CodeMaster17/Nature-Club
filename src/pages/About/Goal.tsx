
const mission = [
    {
        id: 1, heading: "OUR GOAL", text: "Sustainable and empowered communities sensitive to ecology and environment."
    },
    { id: 2, heading: "OUR VISION", text: "We are a non-profit working towards achieving a sustainable community" },
    {
        id: 3, heading: "OUR MISSION", text: "Prioritise issues for climate action, Disaster Resilience and sustainable livelihood aligning with Sustainable Development Goals."
    },
    { id: 4, heading: "PRINCIPLE", text: "We do not develop parallel systems. We rather help strengthen the existing systems for effective implementation of programs and sustainability." },
    { id: 5, heading: "ROLE", text: "Advocacy and partnership, Counselling, Assessment, Implementation, Monitoring" },
    { id: 6, heading: "WORKING CONCEPT:", text: "Meena Club Concept - Child Centric Development model" },
]
const Goal = () => {
    return (
        <section className="w-full">
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-8">
                {/* cards */}
                {mission.map((item) => {
                    return (
                        <div className="p-2 sm:w-1/2 w-full" key={item.id}>
                            <div className="bg-honeydew rounded flex text-left  h-full ">
                                <div className={`h-full w-[40px] ${item.id == 1 || item.id == 4 || item.id == 5 ? `bg-fern_green` : `bg-navy_blue`}`}>
                                </div>
                                <div className="p-12">
                                    <span className="title-font font-medium">{item.heading}</span>
                                    <br />
                                    <p>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Goal
