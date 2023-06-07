import React from "react";
import { AiFillTag } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";

const Hero = () => {
    return (
        <div className="text-lg mx-auto">
            <div className="bg-[#0f3052] text-white">
                <div className=" mx-auto max-w-5xl">
                    <div className="flex gap-x-20 mb-[50px]">
                        <div className="">
                            <h1 className="lg:text-[50px]  pt-[100px]">
                                Rental cars From just
                                <span className="pl-1 text-[#faa152]"> $20/Day</span>
                            </h1>
                        </div>

                        <div className="pt-[100px] space-x-4 mx-3">
                            <div className="flex ">
                            < AiFillTag  className="scale-125 fill-[#faa152] h-20 w-8 mx-4 justify-center"/>
                                <div className=" ">
                                    <h4>
                                        15%off
                                    </h4>
                                        <p className="">
                                            First Time Reservations
                                        </p>
                                </div>
                            </div>
                                <a href="/" className="px-6 pt-2 pb-2 border-1 bg-[#ffffff27] uppercase text-sm">Redeem</a>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3">
                        <div className="col-span-1 max-w-sm p-2">
                            <form className="flex flex-col gap-y-6 text-base text-gray-600" action="/">
                                    <select className="p-3" name="/" id="/">
                                        <option value="/">Car Type</option>
                                        <option value="/">Sedan</option>
                                        <option value="/">Van</option>
                                        <option value="/">MiniVan</option>
                                    </select>
                                    <input className="p-2" type="text" placeholder="Pick Up?"/>
                                <div className="flex gap-x-4 justify-between">
                                    <input className="w-2/3 p-2" type="text" placeholder="Pick Up Date"/>
                                    <input className="w-2/3 p-2" type="text" placeholder="Pick Up Time"/>
                                </div>
                                <div className="flex gap-x-4">
                                    <input className="w-2/3 p-2" type="text" placeholder="Drop Off Date"/>
                                    <input className="w-2/3 p-2" type="text" placeholder="Drop Off Time"/>
                                </div>
                                <div className="align  self-end">
                                    <button className="bg-[#faa152] px-3 py-4 text-white uppercase" type="submit">Request Now</button>
                                </div>
                            </form>
                        </div>
                            <img className="lg:col-span-2 mt-10" src="src\assets\carhero.png" alt="car-rental" />
                    </div>
                </div>
            </div>
                
                <div className="flex justify-between mx-auto mb-4 max-w-4xl mt-32">
                        <div className="grid place-items-center p-5 gap-y-3">
                            < AiFillTag className="scale-150 fill-[#0f3052] h-20 w-8 mx-4"/>
                            <h4 className="text-3xl font-bold p-3">
                                15% off
                            </h4>
                            <p className="text-gray-800">First Time Reservations</p>
                            <a href="/" className="text-[#3050d1] p-3 mt-2 uppercase">Redeem</a>
                        </div>
                        <div className="grid place-items-center p-5 gap-y-3">
                            < BiPhoneCall className="scale-150 fill-[#0f3052] h-20 w-8 mx-4"/>
                            <h4 className="text-3xl font-bold p-3">
                                Reserve by Phone
                            </h4>
                            <p className="text-gray-800">Call Us</p>
                            <a href="/" className="text-[#3050d1] p-3 mt-2 uppercase">+254 720449012</a>
                        </div>
                        <div className="grid place-items-center p-5 gap-y-3">
                            < MdMonitor className="scale-150 fill-[#0f3052] h-20 w-8 mx-4"/>
                            <h4 className="text-3xl font-bold p-3">
                                Reserve Online
                            </h4>
                            <p className="text-gray-800">In Just a few Clicks </p>
                            <a href="/" className="text-[#3050d1] p-3 mt-2 uppercase">Get Started</a>
                        </div>
                </div>

        </div>
    );
    };

export default Hero;