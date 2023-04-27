import react from 'react'
import { useState } from 'react';
import MenuItems from './MenuItems';
import { FiMenu } from 'react-icons/fi';
import navLinks from "../constants";
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Test = () => {

    const [active, setActive] = useState('false')

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <header>
            <div className='fixed w-full flex  items-center justify-between top-2 px-4'>
                <div className='uppercase font-bold text-center flex'>
                    <h1>Car Hire</h1>
                </div>
                
                <div className='flex items-center pr-5'>
                        <nav>

                            <div className="absolute right-6 md:hidden">
                                < FiMenu onClick={showMenu} className='scale-150 cursor-pointer'/>
                            </div>

                            <ul className='md:flex hidden gap-5 p-6'>
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${
                                            active === link.title
                                                ? "text-[#3336dd]" : "text-[#20292f] text-[14px] flex"
                                            } hover:text-black/50 font-medium cursor-pointer`}
                                        onClick={() => setActive(link.title)}
                                    >
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                            <MenuItems showMenu={showMenu} active={active}/>
                        </nav>
                        <a href="/" className='items-center font-[16px] md:hidden lg:flex px-10 pt-6'> <span>< AiOutlineShoppingCart /></span></a>
                </div>
                
                    
            </div>
        </header>
    );
};

export default Test;