
const mission = [
    { id: 1, heading: "OUR GOAL", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus asperiores at fuga illum eos, cupiditate voluptatum nostrum cum quibusdam quod!" },
    { id: 2, heading: "OUR GOAL", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus asperiores at fuga illum eos, cupiditate voluptatum nostrum cum quibusdam quod!" },
    { id: 3, heading: "OUR GOAL", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus asperiores at fuga illum eos, cupiditate voluptatum nostrum cum quibusdam quod!" },
    { id: 4, heading: "OUR GOAL", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus asperiores at fuga illum eos, cupiditate voluptatum nostrum cum quibusdam quod!" },
    { id: 5, heading: "OUR GOAL", text: "Lorem ipsum, dolor sit amet consectetur adipi5icing elit. Temporibus asperiores at fuga illum eos, cupiditate voluptatum nostrum cum quibusdam quod!" },
    { id: 6, heading: "OUR GOAL", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus asperiores at fuga illum eos, cupiditate voluptatum nostrum cum quibusdam quod!" },
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
                                    <span className="title-font font-medium">OUR GOAL</span>
                                    <br />
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus asperiores at fuga illum eos, cupiditate voluptatum nostrum cum quibusdam quod!
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
