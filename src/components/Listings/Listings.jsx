import React from "react";
import Navbar from "../Navbar"
import { AiFillTag } from "react-icons/ai";
import { GrRadialSelected } from "react-icons/gr";
import { FaKey } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import Quality from "../Home/Quality";
import Contact from "../Home/Contact";


const Listings= () => {
    return (
        <div>
            < Navbar />
            <div style={{ backgroundImage: "url('src/assets/Car4.jpg')" }} >
                <div className="bg-[#063661] bg-opacity-80">
                    <div className="flex w-full max-w-5xl mx-auto justify-between p-3">
                        <div>
                                <h1 className="py-4 text-[60px] font-bold m-3 text-white mb-4">
                                    Available Cars For Rent
                                </h1>
                                <p className="flex text-[#faa152] text-[60px] font-bold p-3 mb-10"> As Low as $25/Day</p>
                            <a href="/Listings" className="flex uppercase font-bold p-4 mb-32 mt-16 max-w-[40%] justify-center bg-[#faa152] text-white"> speak with an agent</a>
                        </div>
                            <div className="pt-[100px] space-x-4 mx-3">
                                <div className="flex justify-center">
                                    < AiFillTag  className="scale-125 fill-[#faa152] h-20 w-8 mx-4 justify-center"/>
                                    <div className=" pr-4">
                                        <h4 className="text-white text-2xl font-bold uppercase p-3 flex justify-center">
                                            15% off
                                        </h4>
                                            <p className="text-white p-3 mb-6 flex text-center text-[1rem]">
                                                First Time Reservations
                                            </p>
                                    </div>
                                </div>
                                    <a href="/" className="mt-3 max-w-[40%] pt-3 py-3 border-1 bg-[#ffffff27] uppercase text-sm text-white flex justify-center">Redeem</a>
                            </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-28 mb-5">
                <h1 className="text-5xl font-bold p-3">
                    Reserving a Car is Easy!
                </h1>
                <div className="flex justify-between">
                    <div className="flex p-3 text-center ">
                        < GrRadialSelected className="p-3 scale-150 h-10 w-10" />
                        <p className="font-bold p-2  flex py-5">
                            Book Online, by Phone, or in Person
                        </p>
                    </div>
                    <div className="flex justify-between p-3 text-center">
                        < GrRadialSelected className="p-3 scale-150 h-10 w-10" />
                        <p className="font-bold p-2  flex py-5">
                            Pickup Vehicles or Request Pickup
                        </p>
                    </div>
                    <div className="flex p-3 text-center ">
                        < GrRadialSelected className="p-3 scale-150 h-10 w-10" />
                        <p className="font-bold p-2  flex py-5">
                            Drop Off at Valid Location and Pay
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between max-w-5xl mx-auto gap-10">
                <div className="grid gap-5 mb-10">
                    <img src="src\assets\Car1.jpg" alt="" />
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
                <div className="grid gap-5 mb-10">
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

            <div className="flex justify-between max-w-5xl mx-auto gap-10">
                <div className="grid gap-5 mb-10">
                    <img src="src\assets\Car2.jpg" alt="" />
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
                <div className="grid gap-5 mb-10">
                    <img src="src\assets\Car1.jpg" alt="" />
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

            < Quality />
            < Contact />
     
              
        </div>
    );
};

export default Listings;