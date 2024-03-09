import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <div className="w-full h-20 bg-white z-10 flex justify-center items-center  shadow-lg">
            <div className="xl:w-[90%] w-full flex justify-between">
                <img src="/logo.png" alt="Logo" />
                <div className="w-1/2 flex justify-end items-center relative">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 h-full justify-between items-center cursor-pointer ">
                        <NavLink className="font-semi-bold md:text-base text-xl hover:border-b-2 border-black " to="/">
                            HOME
                        </NavLink>
                        <NavLink to="/about" className="font-semi-bold md:text-base text-xl hover:border-b-2 border-black">
                            ABOUT
                        </NavLink>
                        <NavLink to="/services" className="font-semi-bold md:text-base text-xl hover:border-b-2 border-black">
                            SERVICES
                        </NavLink>
                        <NavLink to="/contact" className="font-semi-bold md:text-base text-xl hover:border-b-2 border-black">
                            CONTACT
                        </NavLink>
                    </ul>

                    {/* Mobile Menu */}
                    <div className="md:hidden pr-4">
                        <RxHamburgerMenu className="cursor-pointer" size={28} onClick={toggleMobileMenu} />
                        {isMobileMenuOpen && (
                            <ul className="absolute z-30 top-20 left-0 right-0 bg-white flex flex-col items-center">
                                <NavLink
                                    className="font-semi-bold text-xl py-2 hover:underline"
                                    to="/"
                                    onClick={toggleMobileMenu}
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="font-semi-bold text-xl py-2 hover:underline"
                                    onClick={toggleMobileMenu}
                                >
                                    ABOUT
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className="font-semi-bold text-xl py-2 hover:underline"
                                    onClick={toggleMobileMenu}
                                >
                                    SERVICES
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="font-semi-bold text-xl py-2 hover:underline"
                                    onClick={toggleMobileMenu}
                                >
                                    CONTACT
                                </NavLink>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
