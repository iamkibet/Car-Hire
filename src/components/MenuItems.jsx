import React from "react";
import navLinks from "../constants";



const MenuItems = ({active}) => {
    return ( 
        <div>
            <ul className={!active ? 'fixed left-0 top-[105px] border-r border-r-gray-900 w-full px-[20%] ease-in-out duration-500 text-[14px]' : 'fixed hidden'}>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-[#3336dd]" : "text-black/100 flex"
                                } hover:text-black/50 bg-[#ebebeb2c] hover:bg-[#f9f9f9da] font-medium cursor-pointer border-b justify-center`}
                            onClick={() => active(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
            </ul>
          </div>
           
    );
};

export default MenuItems;