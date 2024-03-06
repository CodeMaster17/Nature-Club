import Heading from "../../components/Heading"
import ServicesCards from "../../components/ServicesCards"

const Services = () => {
    return (
        <section className="w-full bg-nyanza pb-20 pt-20">
            <div className="w-full text-center">
                <Heading color="black" text="dreams what we serve" type="SMALL" />
                <Heading color="black" text="OUR SERVICES" type="LARGE" />
            </div>
            <div className="2xl:w-3/5 w-4/5 flex flex-wrap m-auto mt-8 gap-6 flex-col md:flex-row">
                <ServicesCards />
                <ServicesCards />
                <ServicesCards />
                <ServicesCards />
                <ServicesCards />
                <ServicesCards />
            </div>
        </section>
    )
}

export default Services
