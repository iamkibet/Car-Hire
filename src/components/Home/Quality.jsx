import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const Quality = () => {
    return (
        <div style={{ backgroundImage: "url('src/assets/Car4.jpg')" }}>
            <div className="flex bg-[#063661] bg-opacity-90 mb-5 p-40 " >
                <div className=" justify-center items-center m-auto max-w-5xl w-screen">
                    <h1 className="text-[60px] text-[#fff] max-w-6xl m-4 p-10 text-center">Lowest Rates & Highest Quality Rentals </h1>
                <div className="grid grid-cols-3 gap-20">
                    <div className="grid gap-y-5">
                        <div className="flex justify-between">
                            < BsCheckCircle className=" scale-100 h-20 w-8 mx-4 fill-[#faa152]" />
                            <p className="text-[#fff] text-xl p-2"> Curabitur arcu erat, accumsan id imperdiet et</p>
                        </div>
                        <div className="flex justify-between">
                            < BsCheckCircle className=" scale-100 h-20 w-8 mx-4 fill-[#faa152]" />
                            <p className="text-[#fff] text-xl p-2"> Curabitur arcu erat, accumsan id imperdiet et</p>
                        </div>
                    </div>
                    <div className="grid gap-y-5">
                        <div className="flex justify-between">
                            < BsCheckCircle className=" scale-100 h-20 w-8 mx-4 fill-[#faa152]" />
                            <p className="text-[#fff] text-xl p-2"> Curabitur arcu erat, accumsan id imperdiet et</p>
                        </div>
                        <div className="flex justify-between">
                            < BsCheckCircle className=" scale-100 h-20 w-8 mx-4 fill-[#faa152]" />
                            <p className="text-[#fff] text-xl p-2"> Curabitur arcu erat, accumsan id imperdiet et</p>
                        </div>
                    </div>
                    <div className="grid gap-y-5">
                        <div className="flex justify-between">
                            < BsCheckCircle className=" scale-100 h-20 w-8 mx-4 fill-[#faa152]" />
                            <p className="text-[#fff] text-xl p-2"> Curabitur arcu erat, accumsan id imperdiet et</p>
                        </div>
                        <div className="flex justify-between">
                            < BsCheckCircle className=" scale-100 h-20 w-8 mx-4 fill-[#faa152]" />
                            <p className="text-[#fff] text-xl p-2"> Curabitur arcu erat, accumsan id imperdiet et</p>
                        </div>
                    </div>
                </div>

                </div>
                
            </div>
        </div>
    )
}

export default Quality