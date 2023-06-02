import React from "react";
import { AiFillTag } from "react-icons/ai";

const Hero = () => {
    return (
        <div className="text-lg">
            <div className="bg-[#0f3052] text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between w-full px-6">
                        <div className="">
                            <h1 className="text-[50px] flex items-center pt-[100px]">
                                Rental cars From just
                                <span className="pl-2"> $20/Day</span>
                            </h1>
                        </div>

                        <div className="pt-[100px] flex items-center">
                            < AiFillTag />
                            <div>
                                <h4>
                                        15%off
                                </h4>
                                    <p>
                                        First Time Reservations
                                    </p>
                                    <a href="/">Redeem</a>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3">
                            <form className="col-span-1" action="/">
                                <div className="bg-dark">
                                    <label htmlFor="/"> Car Type</label>
                                    <select name="/" id="/">
                                        <option value="/">Car Type</option>
                                        <option value="/">Sedan</option>
                                        <option value="/">Van</option>
                                        <option value="/">MiniVan</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="/">Pick Up Location</label>
                                    <input type="text" placeholder="Pick Up?"/>
                                </div>
                                <div>
                                    <label htmlFor="/">Pick Up Date</label>
                                    <input type="text" placeholder="Pick Up Date"/>
                                </div>
                                <div>
                                    <label htmlFor="/">Pick Up Time</label>
                                    <input type="text" placeholder="Pick Up Time"/>
                                </div>
                                <div>
                                    <label htmlFor="/">Drop Off Date</label>
                                    <input type="text" placeholder="Drop Off Date"/>
                                </div>
                                <div>
                                    <label htmlFor="/">Drop Off Time</label>
                                    <input type="text" placeholder="Drop Off Time"/>
                                </div>
                                <div>
                                    <button type="submit">Request Now</button>
                                </div>
                            </form>
                            <img className="lg:col-span-2" src="src\assets\carhero.png" alt="car-rental" />
                    </div>
                </div>
                
                
                
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <span>
                                        Image
                                    </span>
                                </div>
                                <div>
                                    <h4>
                                        <span>15% off</span>
                                    </h4>
                                    <div>
                                        <p>First Time Reservations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="/">Redeem</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <span>
                                        Icon
                                    </span>
                                </div>
                                <div>
                                    <h4>
                                        <span>
                                            Reserve by Phone
                                        </span>
                                    </h4>
                                    <div>
                                        <p>
                                            Call Us
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="/">+254720449012</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <span>
                                        Icon
                                    </span>
                                </div>
                                <div>
                                    <h4>
                                        <span>
                                            Reserve Online
                                        </span>
                                    </h4>
                                    <div>
                                        <p>
                                            In Just a Few Clicks
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="/">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
    };

export default Hero;