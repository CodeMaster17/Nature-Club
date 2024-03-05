import Heading from "../../components/Heading"
import { AcheivementData } from "../../constants"

interface AcheivmentDataType {
    id: number,
    value: string

}
const Acheivements = () => {
    return (
        <section className="w-full h-[80vh]">
            <img src="/about/acheivments.png" alt="acheivments image" className="z-0 w-full h-full" />
            <div className="w-full border-2 h-[80vh]  bg-nyanza relative">

                <div className="flex flex-col items-center p-8 bg-pale_olive rounded-4xl lg:w-3/5 sm:mx-auto sm:mb-2 absolute  z-10 left-0 right-0 top-[-10vh]">
                    <Heading type="LARGE" text="OUR ACHEIVMENTS" color="white" />
                    {AcheivementData.map((item: AcheivmentDataType) => {
                        return (
                            <div className="mt-4  w-4/5 border-2 flex justify-center items-center" key={item.id}>
                                <div className="bg-gray-100 w-full  rounded flex p-4 h-full items-center">
                                    <span className="title-font font-light text-sm text-center ">{item.value}</span>
                                </div>
                            </div>
                        )
                    })}
                    <button className="py-2 px-4 mt-8 rounded-2.5xl bg-fern_green text-white">Load More </button>
                </div>
            </div>
        </section>
    )
}

export default Acheivements
