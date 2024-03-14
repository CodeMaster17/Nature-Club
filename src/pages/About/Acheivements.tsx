
import Heading from '../../components/Heading'
import { AcheivementData } from '../../constants';

import './About.css'
interface AcheivmentDataType {
    id: number;
    value: string;
}
const Acheivements = () => {
    return (
        <section className="w-full flex items-center justify-center flex-col">
            {/* <img src="/about/acheivments.png" alt="acheivments image" className=" w-full h-full" /> */}
            <div className="w-full h-[60vh] achievment-bg-image ">

            </div>
            <div className="w-[90%] lg:w-full border-2 bg-nyanza">

                <div className="flex flex-col items-center p-8 bg-pale_olive rounded-4xl lg:w-3/5 sm:mx-auto mb-2 mt-[-10vh] lg:mb-12  ">
                    <Heading type="LARGE" text="OUR ACHEIVMENTS" color="white" />
                    {AcheivementData.map((item: AcheivmentDataType) => {
                        return (
                            <div className="mt-4 w-[95%] md:w-4/5  flex justify-center items-center rounded-2.5xl bg-gray-100" key={item.id}>
                                <div className=" w-full  rounded flex p-4 h-full items-center">
                                    <span className="title-font font-light text-sm text-center ">{item.value}</span>
                                </div>
                            </div>
                        )
                    })}
                    {/* <button className="py-2 px-4 mt-8 rounded-2.5xl bg-fern_green text-white">Load More </button> */}
                </div>
            </div>
        </section>
    )
}

export default Acheivements
