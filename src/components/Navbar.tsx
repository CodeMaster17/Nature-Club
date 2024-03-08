import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <div className="w-full h-20 bg-white z-10 flex justify-center items-center fixed top-0 shadow-lg">
            <div className="xl:w-[90%] w-full flex justify-between px-4">
                <img src="/logo.png" alt="Logo" />
                <div className="w-1/2 flex justify-end items-center border-2 relative">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 h-full justify-between items-center cursor-pointer">
                        <NavLink className="font-semi-bold md:text-base text-xl hover:underline" to="/">
                            HOME
                        </NavLink>
                        <NavLink to="/about" className="font-semi-bold md:text-base text-xl hover:underline">
                            ABOUT
                        </NavLink>
                        <NavLink to="/services" className="font-semi-bold md:text-base text-xl hover:underline">
                            SERVICES
                        </NavLink>
                        <NavLink to="/contact" className="font-semi-bold md:text-base text-xl hover:underline">
                            CONTACT
                        </NavLink>
                    </ul>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <RxHamburgerMenu className="cursor-pointer" size={28} onClick={toggleMobileMenu} />
                        {isMobileMenuOpen && (
                            <ul className="absolute top-20 left-0 right-0 bg-white flex flex-col items-center">
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
