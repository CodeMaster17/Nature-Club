import Heading from "../../components/Heading"



const Contact = () => {
    return (
        <>
            <section className="w-full my-20 max-h-screen">
                <div className="w-3/5 md:w-4/5 m-auto flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 lg:p-8">
                        <Heading text="CONTACT US" color="Black" type="LARGE" />
                        <br />

                        {/* <div className="p-2 bg-light_blue rounded-lg">
                        <span className="flex text-base md:text-lg">
                        <p className="text-fern_green">YOU HAVE THE POWER &nbsp;</p>
                        <br className="block md:hidden" />
                        <p>TO CHANGE</p>
                        </span>
                    </div> */}
                        {/* <br /> */}
                        <br />
                        <p className="text-lg">For any greivances, suggestions <br /> and queries kindly write to us. </p>
                        <br />
                        <br />
                        <p className="text-lg">For Media Related Queries</p>
                        <p className="font-light text-gray">Write to Nature's club at</p>
                        <p className="font-light text-gray">naturesorrisa@gmail.com</p>
                        <br />
                        <br />
                        <p className="text-lg">Contact Details</p>
                        <p className="font-light text-gray">+91 9556877750</p>
                        <p className="font-light text-gray">+91 9437212396 (Treasurer)</p>
                    </div>
                    <div className="md:block hidden w-1/2">
                        <img src="/contact/contact.png" alt="" />
                    </div>
                </div>
            </section>
            <div className="hidden md:block lg:hidden w-full h-[20vh]">

            </div>
        </>
    )
}

export default Contact
