import React from "react";

const Navbar = () => {
    return (
     <header className="flex text-dark justify-between items-center h-20 max-w-[1240px] px-4 mx-auto">
        <div className="">
            <div className="w-full bg-dark flex max-w-lg">
                <h1 className="text-[14px] w-full font-bold text-blue ">
                    <a href="/" title="Car Hire"> Car Hire | Lets Go</a>
                </h1>
            </div>
            <div className="w-10 ">
                <nav className="">
                    <ul className="flex">
                        <li className="p-4">
                            <a href="/">Home</a>
                        </li>
                        <li className="p-4">
                            <a href="/">Listings</a>
                        </li>
                        <li className="p-4">
                            <a href="/">Contact</a>
                        </li>
                        <li className="p-4">
                            <a href="/">Services</a>
                        </li>
                        <li className="p-4">
                            <a href="/">About</a>
                        </li>
                        <li className="p-4">
                            <a href="/">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
     </header>
    )
}

export default Navbar