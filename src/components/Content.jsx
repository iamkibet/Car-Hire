import React from "react";
import { AiFillTags } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Content = () => {
    return (
        <div className="flex max-w-5xl mx-auto">
            <div className="">
                <h1 className="text-[50px] font-bold text-[#333]"> Get Into Gear</h1>
                <p className="text-[#666] font-sans text-lg tracking-wider leading-loose">
                Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                </p>
                <div className="m-4 ">
                    <div className="grid grid-cols-2 gap-32">
                        <div className=" flex justify-between gap-4 p-3">
                            < AiFillTags className="scale-[100%] h-32 w-32 fill-[#3050d1]"/>
                            <div className=" grid place-items-center">
                                <h1 className="font-bold text-xl">Lowest Rates</h1>
                                <p className="text-[#666] font-medium text-lg p-2 justify-center">
                                Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-4">
                            < FaKey className="scale-[100%] h-32 w-32 fill-[#3050d1]"/>
                            <div className=" grid place-items-center">
                                <h1 className="font-bold text-xl">Unlimited Gas & Miles</h1>
                                <p className="text-[#666] font-medium text-lg">
                                Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-32">
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
            <div className="ml-20 p-4 m-4">
                <h1 className="p-2 text-[50px] font-bold text-[#333]">
                    Offers
                </h1>
                    <div className="flex place-items-center">
                    < AiFillTags className=" fill-[#faa152] scale-100 h-16 w-10"/>
                    <div className=" grid place-items-center">
                        <h1 className="font-bold text-xl p-2">15% off</h1>
                        <p className="p-4">First Time Reservation</p>
                    </div>
                    </div>

                    <div className="flex place-items-center">
                    < AiFillTags className=" fill-[#faa152] scale-100 h-16 w-10"/>
                    <div className=" grid place-items-center">
                        <h1 className="font-bold text-xl p-2">15% off</h1>
                        <p className="p-4">First Time Reservation</p>
                    </div>
                    </div>

                    <div className="flex place-items-center">
                    < AiFillTags className=" fill-[#faa152] scale-100 h-16 w-10"/>
                    <div className=" grid place-items-center">
                        <h1 className="font-bold text-xl p-2">15% off</h1>
                        <p className="p-4">First Time Reservation</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Content