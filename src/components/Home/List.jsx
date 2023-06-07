import React from "react";
import { FaKey } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

const List = () => {
    return (
       <div className="max-w-5xl mx-auto mt-20 p-3 mb-3" >
       <div className="flex mb-12 gap-10" >
            <div className="grid gap-5">
                <img src="src\assets\Car1.jpg" alt="" />
                <div className="ml-5">
                    <h1 className="p-2 font-bold text-xl">Lead VB</h1>
                    <p className="text-[#faa152] p-2 text-xl font-bold">Starting $40/Day</p>
                    <div className="flex gap-6 mt-1 p-2">
                        < FaKey className="scale-100"/>
                        <p>
                            Vihecle Type: Sedan
                        </p>
                    </div>
                    <div className="flex gap-6 p-2">
                        < BsFillPeopleFill className="scale-100" />
                        <p>
                            4 Doors, 5 Seats
                        </p>
                    </div>
                    <div className="flex gap-6 p-2 mb-5"> 
                        < CiSettings className="scale-100" />
                        <p>
                            Transmission Automatic
                        </p>
                    </div>
                    <a href="/" className="p-2 font-bold text-lg">More Details</a>
                </div>
                <button className="bg-[#faa152] uppercase text-white p-3 mx-16 mt-3">Reserve Now</button>
            </div>
            <div className="grid gap-5">
                <img src="src\assets\Car2.jpg" alt="" />
                <div className="ml-5">
                    <h1 className="p-2 font-bold text-xl">Monarch Sport</h1>
                    <p className="text-[#faa152] p-2 text-xl font-bold">Starting $40/Day</p>
                    <div className="flex gap-6 mt-1 p-2">
                        < FaKey className="scale-100"/>
                        <p>
                            Vihecle Type: SUV
                        </p>
                    </div>
                    <div className="flex gap-6 p-2">
                        < BsFillPeopleFill className="scale-100" />
                        <p>
                            4 Doors, 7 Seats
                        </p>
                    </div>
                    <div className="flex gap-6 p-2 mb-5"> 
                        < CiSettings className="scale-100" />
                        <p>
                            Transmission Automatic
                        </p>
                    </div>
                    <a href="/" className="p-2 font-bold text-lg">More Details</a>
                </div>
                <button className="bg-[#faa152] uppercase text-white p-3 mx-16 mt-3">Reserve Now</button>
            </div>

            <div className="grid gap-5">
                <img src="src\assets\Car3.jpg" alt="" />
                <div className="ml-5">
                    <h1 className="p-2 font-bold text-xl">Nexus Passenger</h1>
                    <p className="text-[#faa152] p-2 text-xl font-bold">Starting $40/Day</p>
                    <div className="flex gap-6 mt-1 p-2">
                        < FaKey className="scale-100"/>
                        <p>
                            Vihecle Type: Van
                        </p>
                    </div>
                    <div className="flex gap-6 p-2">
                        < BsFillPeopleFill className="scale-100" />
                        <p>
                            4 Doors, 8 Seats
                        </p>
                    </div>
                    <div className="flex gap-6 p-2 mb-5"> 
                        < CiSettings className="scale-100" />
                        <p>
                            Transmission Automatic
                        </p>
                    </div>
                    <a href="/" className="p-2 font-bold text-lg">More Details</a>
                </div>
                <button className="bg-[#faa152] uppercase text-white p-3 mx-16 mt-3">Reserve Now</button>
            </div>
        </div>
        <a href="/" className="flex justify-center mx-96 mb-3 text-[#3050d1] uppercase p-4 border-solid border-2 border-[rgba(0,0,0,0.12)]">Browse all vihecles</a>
    </div>
        
    )
}

export default List