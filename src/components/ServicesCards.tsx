

const ServicesCards = () => {
    return (
        <div className="w-full md:w-[30%] rounded-2.5xl bg-white">
            <div className="flex flex-col h-40 md:h-96">
                <img src="/services/1.png" alt="Service" className="w-full h-1/2 object-cover" />
                <div className="w-full h-1/2 p-4">
                    <h1 className="text-center text-2xl font-bold mb-2">Service Name</h1>
                    <p className="text-center">Service Description</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesCards
