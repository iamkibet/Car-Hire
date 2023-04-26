import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";



const MenuItems = ({showMenu, active}) => {
    return ( 
            <ul className={active ? 'md:hidden flex-col flex items-center fixed inset-0 left-1/4 p-8 uppercase bg-black/5 gap-8' : 'hidden'}>

                < AiOutlineClose onClick={showMenu} className="cursor-pointer"/>
                    <li>
                        Home
                    </li>
                    <li>
                        Order
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Link
                    </li>
                    <li>
                        Hiii
                    </li>
                    <li>
                        Mmh
                    </li>
                </ul>
    );
};

export default MenuItems;