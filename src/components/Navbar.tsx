import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="w-full bg-white z-10 flex justify-center items-center border-2 border-black fixed top-0">
            <div className="xl:w-[90%] flex justify-between">
                <img src="/logo.png" alt="Logo" />
                <div className="w-1/2 border-2">
                    <ul className="flex gap-4 h-full justify-between items-center cursor-pointer ">
                        <NavLink className="font-bold text-xl hover:underline" to="/">HOME</NavLink>
                        <NavLink to="/about" className="font-bold text-xl hover:underline" >ABOUT</NavLink>
                        <NavLink to="/services" className="font-bold text-xl hover:underline">SERVICES</NavLink>
                        <NavLink to='/contact' className="font-bold text-xl hover:underline">CONTACT</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
