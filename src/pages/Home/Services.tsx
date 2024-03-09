import Heading from "../../components/Heading"
import ServicesCards from "../../components/ServicesCards"

const Services = () => {
    return (
        <section className="w-full bg-nyanza pb-20 pt-20 overflow-y-hidden">
            <div className="w-full text-center">
                <Heading color="#588645" text="areas what we serve" type="SMALL" />
                <Heading color="#010066" text="OUR SERVICES" type="LARGE" />
            </div>
            <div className="2xl:w-3/5 w-4/5 flex flex-wrap m-auto mt-8 gap-6 flex-col md:flex-row items-center justify-center">
                <ServicesCards />
            </div>
        </section>
    )
}

export default Services
