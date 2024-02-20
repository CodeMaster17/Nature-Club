import Heading from "../../components/Heading"
import ServicesCards from "../../components/ServicesCards"

const Services = () => {
    return (
        <div className="w-full bg-nyanza ">
            <div className="w-full">
                <Heading color="black" text="dreams what we serve" type="SMALL" />
                <Heading color="black" text="OUR SERVICES" type="LARGE" />
            </div>
            {/* <ServicesCards /> */}
        </div>
    )
}

export default Services
