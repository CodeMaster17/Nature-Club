import { NavLink } from "react-router-dom"

const ClimateChampions = () => {
    return (
        <section className="w-full flex">
            <div className="w-1/2 border-2">
                {/* TODO : CARAOSUEL */}
                <img className="object-cover rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
            <div className="w-1/2 bg-white p-4 flex justify-center items-center text-center">
                <div className="w-4/5 h-4/5 ">

                    <h1 className="text-3xl text-navy_blue tracking-wider">CLIMATE CHAMPIONS</h1>
                    <p className="text-lg mt-4">
                        Our climate champions are the people who have made a significant impact in the fight against climate change. They have been working tirelessly to make the world a better place for all of us. We are proud to have them as a part of our community.
                        <br />
                        Our climate champions are the people who have made a significant impact in the fight against climate change. They have been working tirelessly to make the world a better place for all of us. We are proud to have them as a part of our community.
                    </p>
                    <NavLink to="/about">READ MORE</NavLink>

                </div>
            </div>
        </section>
    )
}

export default ClimateChampions
