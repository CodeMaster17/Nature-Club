import { useState } from "react"
import Heading from "../../components/Heading"
import { ServicesTabsData } from "../../constants"
import HealthAndNutrition from "./HealthAndNutrition"
import EcologyAndEnvironment from "./EcologyAndEnvironment"
import DisasterRiskReduction from "./DisasterRiskReduction"
import ClimateChange from "./ClimateChange"
import ChildRights from "./ChildRights"
import WaterSanitation from "./WaterSanitation"
import './Service.css'

const ServicesPage = () => {

    const [activeTab, setActiveTab] = useState(1)
    const tabHandler = (currentId: number) => {
        setActiveTab(currentId)
    }
    return (
        <section className="w-full">
            <div className="w-full bg-navy_blue text-center p-5  md:p-8">
                <Heading type="LARGE" text="OUR SERVICES" color="white" />
                {/* <p className="text-white text-md mt-4 w-full md:w-3/5 m-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui ipsa inventore aliquam, dignissimos expedita minus sed recusandae, illum iure, dolores dolore maxime ea excepturi? Non suscipit blanditiis placeat expedita?
                </p> */}
            </div>
            <div className="w-full bg-navy_blue text-center p-2  md:p-8 flex lg:gap-2 gap-4 justify-center items-center  flex-wrap ">
                {ServicesTabsData.map((item) => {
                    return (
                        <div className={`w-[40%]  md:w-1/5 border-[0.5px] rounded-2xl cursor-pointer h-12 flex justify-center items-center px-2 lg:py-4 lg:text-base md:m-4 text-sm ${item.id === activeTab ? "activeTab" : ""} `} key={item.id} onClick={() => tabHandler(item.id)}>
                            <h1 className="text-white">{item.title}</h1>
                        </div>
                    )
                })}
            </div>
            <div className="w-full p-2 md:p-2">
                {activeTab === 1 && <HealthAndNutrition />}
                {activeTab === 2 && <EcologyAndEnvironment />}
                {activeTab === 3 && <DisasterRiskReduction />}
                {activeTab === 4 && <ClimateChange />}
                {activeTab === 5 && <ChildRights />}
                {activeTab === 6 && <WaterSanitation />}
            </div>

        </section>
    )
}

export default ServicesPage
