import react from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuItems from './Home/MenuItems';
import { FiMenu } from 'react-icons/fi';
import navLinks from "../constants";
import { IoCart } from 'react-icons/io5';
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

    const [active, setActive] = useState('false')

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <header>
            <div className='w-full flex  items-center justify-between top-0 px-4 max-w-[1240px] h-24'>
                <div className='uppercase font-bold flex'>
                    <h1>Car Hire</h1>
                </div>
                
                <div className='flex items-center pr-5'>
                        <nav>
                            <ul className='hidden md:flex gap-5 p-6 text-[14px]'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                    active === link.title ? "text-[#3336dd] text-black" : "text-[#20292f]"
                                    } flex hover:text-black/50 font-medium cursor-pointer`}
                                    onClick={() => setActive(link.title)}
                                >
                                    <Link to={link.path}>{link.title}</Link>
                                </li>
                                ))}
                            </ul>
                            <div onClick={showMenu} className='block md:hidden'>
                            {!active ? <AiOutlineClose size={20}/>  : <FiMenu />}
                            </div>
                            <MenuItems  active={active}/>

                        </nav>
                        <a href="/" className='items-center font-[16px]'> <span><IoCart /></span></a>
                </div>          
            </div>
        </header>
    );
};

export default Navbar;