
const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-navy_blue overflow-y-hidden">
            <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64  flex flex-col gap-4 justify-center items-center flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src="/footer/logo.png" alt="" className="w-20 h-20" />
                        {/* <span className="ml-3 text-xl">Nature's Club</span> */}
                    </a>

                    <span className="flex gap-4">

                        <a className=" text-gray-500 rounded-full" href="#">
                            <img src="/footer/LinkedIn Circled.png" alt="" />
                        </a>
                        <a className=" rounded-full" href="#">
                            <img src="/footer/Facebook.svg" alt="" />
                        </a>
                        <a className=" text-gray-500  rounded-full" href="#">
                            <img src="/footer/WhatsApp.png" alt="" />

                        </a>
                        <a className=" text-gray-500  rounded-full" href="#">
                            <img src="/footer/Instagram Circle.png" alt="" />
                        </a>
                    </span>
                </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-full md:w-1/2 w-full ">
                        <nav className="list-none mb-10 ">
                            <p className="text-white text-base">Registered Office - At Mahipal, Po/Dist- Kendrapara, Odisha, Pin-754211</p>
                            <br />
                            <p className="text-white text-base">Societies Registration Act &nbsp;  XXI of 1860, &nbsp;  Regd. No. 20104 / 67</p>
                            <br />
                            <p className="text-white text-base">PAN Number :	AAATN4012D</p>
                            <br />
                            <p className="text-white text-base">Registered under 12(A) & 80(G)</p>
                            <br />
                            <p className="text-white text-base italic">@Copyright 2024 All Rights Reserved</p>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
