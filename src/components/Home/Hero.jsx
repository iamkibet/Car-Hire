import React, { useEffect, useState } from "react";
import { AiFillTag } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";
import { json } from "react-router-dom";

const Hero = () => {

   const [formData, setFormData] =  useState({
        cartype: "Van",
        pickuptime: "",
        pickupdate: "",
        dropofftime: "",
        dropoffdate: "",
    })

    useEffect(() => {
            getForm();
        },
       []);

    async function saveForm() {
        // save to db
        // http requestuest server
        await fetch("http://localhost:4000/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response) => {
            response.json().then((result) => {
                console.log(result);
            });
        });

        // save to local storage
        localStorage.setItem("formData", JSON.stringify(formData));
    } 

    function getForm() {
        const data = localStorage.getItem("formData") 
        if (data) setFormData(JSON.parse(data))
    }

    

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    return (
        <div className="text-lg mx-auto">
            <div style={{ backgroundImage: "url('src/assets/Carbg.jpg')" }}>
                <div className="bg-[#0f3052] bg-opacity-70 text-white">
                    <div className=" mx-auto max-w-5xl">
                        <div className="flex gap-x-20 mb-[50px]">
                            <div className="">
                                <h1 className="lg:text-[50px]  pt-[100px]">
                                    Rental cars From just
                                    <span className="pl-1 text-[#faa152]"> $20/Day</span>
                                </h1>
                            </div>

                            <div className="pt-[100px] space-x-4 mx-3">
                                <div className="flex justify-center">
                                    < AiFillTag  className="scale-125 fill-[#faa152] h-20 w-8 mx-4 justify-center"/>
                                    <div className=" pr-4">
                                        <h4 className="text-white text-2xl font-bold uppercase p-3 flex justify-center">
                                            15% off
                                        </h4>
                                            <p className="text-white flex text-center text-[1rem]">
                                                First Time Reservations
                                            </p>
                                    </div>
                                </div>
                                    <a href="/" className="mt-3 max-w-[40%] pt-3 py-3 border-1 bg-[#ffffff27] uppercase text-sm text-white flex justify-center">Redeem</a>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3">
                            <div className="col-span-1 max-w-sm p-2">
                                <form onSubmit={saveForm} className="flex flex-col gap-y-6 text-base text-gray-600" action="/">
                                {formData.cartype}
                                <select onChange={handleChange} className="p-3" name="cartype" id="/" value={formData.cartype}>
                                    <option value="/">Car Type</option>
                                    
                                    <option value="Sedan">Sedan</option>
                                    <option value="Van">Van</option>
                                    <option value="Minivan">MiniVan</option>
                                </select>
                                       
                                    <div className="flex gap-x-4 justify-between">
                                        <input value={formData.pickupdate} onChange={handleChange} className="w-2/3 p-2" name="pickupdate"  type="text" placeholder="Pick Up Date"/>
                                        <input value={formData.pickuptime} onChange={handleChange} className="w-2/3 p-2" name="pickuptime"  type="text" placeholder="Pick Up Time"/>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <input value={formData.dropoffdate} onChange={handleChange} className="w-2/3 p-2"  name="dropoffdate"  type="text" placeholder="Drop Off Date"/>
                                        <input value={formData.dropofftime} onChange={handleChange} className="w-2/3 p-2"  name="dropofftime"  type="text" placeholder="Drop Off Time"/>
                                    </div>
                                    <div className="align  self-end">
                                        <button id="carForm" className="bg-[#faa152] px-3 py-4 text-white uppercase" type="submit">Request Now</button>
                                    </div>
                                </form>
                            </div>
                                <img className="lg:col-span-2 mt-10" src="src\assets\carhero.png" alt="car-rental" />
                        </div>
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