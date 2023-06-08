import React from "react";
import Navbar from "../Navbar";
import Hero from "../Home/Hero";
import { AiFillTags } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";



const Landing = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div>
                <div className="flex justify-between max-w-5xl mx-auto">
                    
                    <div className=" flex justify-between gap-4 p-3">
                        < AiFillTags className="scale-50 h-32 w-32 fill-[#3050d1]"/>
                        <div className="">
                            <h1 className="font-bold text-xl flex ">Lowest Rates</h1>
                            <p className="text-[#666] font-medium text-lg text-center p-2">
                            Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        < FaKey className="scale-[100%] h-32 w-32 fill-[#3050d1]"/>
                        <div className=" grid ">
                            <h1 className="font-bold text-xl">Unlimited Gas & Miles</h1>
                            <p className="text-[#666] font-medium text-lg">
                            Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        < AiFillClockCircle className="scale-[100%] h-32 w-32 fill-[#3050d1]"/>
                        <div className=" grid place-items-center">
                            <h1 className="font-bold text-xl">24/7 Pickup & Return Access</h1>
                            <p className="text-[#666] font-medium text-lg">
                            Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        < CiLocationOn className="scale-[100%] h-32 w-32 fill-[#3050d1]"/>
                        <div className=" grid place-items-center">
                            <h1 className="font-bold text-xl">Multiple Drop-Off Locations</h1>
                            <p className="text-[#666] font-medium text-lg">
                            Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;