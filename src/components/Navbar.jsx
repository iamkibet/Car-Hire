import React from "react";

const Navbar = () => {
  return (
    <header className="text-dark px-4 mx-auto">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-[14px] font-bold ">
            <a href="/" title="Car Hire">
              {" "}
              Car Hire | Lets Go
            </a>
          </h1>
        </div>
        <div>
          {/* Shopping cart icon */}
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-label="Shopping Cart"
          >
            {/* Icon path goes here */}
          </svg>
        </div>
        <ul className="flex items-center">
        <li className="p-4 hover:text-blue hover:bg-gray-200">
            <a href="/">Home</a>
          </li>
          <li className="p-4 hover:text-blue hover:bg-gray-200">
            <a href="/">Listings</a>
          </li>
          <li className="p-4 hover:text-blue hover:bg-gray-200">
            <a href="/">Contact</a>
          </li>
          <li className="p-4 hover:text-blue hover:bg-gray-200">
            <a href="/">Services</a>
          </li>
          <li className="p-4 hover:text-blue hover:bg-gray-200">
            <a href="/">About</a>
          </li>
          <li className="p-4 hover:text-blue hover:bg-gray-200">
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
