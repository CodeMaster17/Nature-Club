import { useState } from "react"
import Heading from "../../components/Heading"
import { ServicesTabsData } from "../../constants"


const ServicesPage = () => {

    const [activeTab, setActiveTab] = useState(1)
    const tabHandler = (currentId: number) => {
        setActiveTab(currentId)
    }
    return (
        <section className="w-full">
            <div className="lg:mt-20 w-full bg-navy_blue text-center p-8">
                <Heading type="LARGE" text="OUR SERVICES" color="white" />
                <p className="text-white text-md mt-4 w-3/5 m-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui ipsa inventore aliquam, dignissimos expedita minus sed recusandae, illum iure, dolores dolore maxime ea excepturi? Non suscipit blanditiis placeat expedita?
                </p>
            </div>
            <div className="w-full bg-navy_blue text-center p-8 flex">
                {ServicesTabsData.map((item) => {
                    return (
                        <div className={`w-1/5 border-2 rounded-2xl p-4 m-4 ${item.id === activeTab ? "shadow-md shadow-red-50" : ""} `} key={item.id} onClick={() => tabHandler(item.id)}>
                            <h1 className="text-white">{item.title}</h1>
                        </div>
                    )
                })}
            </div>
            <div className="w-full p-8">
                {ServicesTabsData.map((item) => {
                    return item.id === activeTab ? (
                        <>
                            <img src={item.imgURL} alt="" className="w-full" />
                            <div className={`w-full`} key={item.id}>
                                <p className="text-black">{item.description}</p>
                            </div>
                        </>
                    ) : null;
                })}
            </div>

        </section>
    )
}

export default ServicesPage
