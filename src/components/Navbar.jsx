import React, { useState } from "react";
import navLinks from "../constants";;
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");

  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full flex pt-5 items-center top-0 fixed z-0 justify-between pr-10">
      <div className="flex items-center w-full px-5">
        <nav
          to="#"
          className="w-full flex items-center gap-2 sm:flex"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-[15px] text-black cursor-pointer flex ">
            Car Rental &nbsp;
             <span className="sm:block"> | 
             Lets Go</span>
          </p>
        </nav>
        <ul className="list-none gap-5 text-[15px] flex sm:flex-auto sm-hidden">
          {navLinks.map((link) => (
            <li
            key={link.id}
            className={`${
              active === link.title 
              ? "text-[#3336dd]" : "text-[#000000] flex"
            } hover:text-[#3336dd] hover:text-[15px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )) }
        </ul>
        <div className="">
            <img 
            src={toggle ? <AiOutlineClose /> : <FiMenu /> } 
            alt="menu"
            className=""
            onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px z-10 rounded-xl]`}>
                  <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                  key={link.id}
                  className={`${
                    active === link.title 
                    ? "text-[#3336dd]" : "text-[#000000] flex"
                  } hover:text-[#3336dd] hover:text-[15px] font-medium cursor-pointer`}
                    onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )) }
              </ul>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 