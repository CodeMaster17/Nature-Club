
const Navbar = () => {
    return (
        <div className="w-full z-10 flex justify-center items-center border-2 border-black fixed top-0">
            <div className="xl:w-[90%] flex justify-between">
                <img src="/logo.png" alt="Logo" />
                <div className="w-1/2 border-2">
                    <ul className="flex gap-4 h-full justify-between items-center cursor-pointer ">
                        <a className="font-bold text-xl hover:underline">HOME</a>
                        <a className="font-bold text-xl hover:underline">ABOUT</a>
                        <a className="font-bold text-xl hover:underline">SERVICES</a>
                        <a className="font-bold text-xl hover:underline">CONTACT</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
