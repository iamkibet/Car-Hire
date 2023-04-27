import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import navLinks from "../constants";



const MenuItems = ({showMenu, active}) => {
    return ( 
        <div>

      
            <ul className={!active ? 'fixed left-0 top-[105px] border-r border-r-gray-900 w-full px-[20%] pt-24  uppercase ease-in-out duration-500' : 'fixed hidden'}>

                < AiOutlineClose onClick={showMenu} className="cursor-pointer"/>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-[#3336dd]" : "text-black/100 flex"
                                } hover:text-black/50 bg-[#ebebeb2c] hover:bg-[#f9f9f9da] font-medium cursor-pointer border-b justify-center`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
            </ul>
          </div>
           
    );
};

export default MenuItems;