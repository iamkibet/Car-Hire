import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import navLinks from "../constants";
import { AiOutlineShoppingCart } from 'react-icons/ai';



const MenuItems = ({showMenu, active}) => {
    return ( 
            <ul className={active ? 'md:hidden flex-col flex items-center fixed inset-0 left-1/4 p-8 uppercase bg-black/5 gap-8' : 'hidden'}>

                < AiOutlineClose onClick={showMenu} className="cursor-pointer"/>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-[#3336dd]" : "text-black/100 flex"
                                } hover:text-black/50 hover:text-[15px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
            </ul>
    );
};

export default MenuItems;