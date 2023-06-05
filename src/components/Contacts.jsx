import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const Contacts = () => {
    return (
        <div className="max-w-5xl mx-auto mb-3 bg-[#26337]">
            <h1 className="font-bold text-lg p-4 uppercase w-full flex justify-center mb-3">Contact Us</h1>
            <div className="flex justify-center gap-5 ">
            <div>
                <form action="" className="max-w-lg mr-14 mx-auto">
                    <div className="flex mb-6 ">
                        <div className="p-2 mr-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input type="text" placeholder="Name" className=" w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-[#3050d1] p-4 m-2" />
                        </div>
                        <div className="p-2">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input type="email" id="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-[#3050d1] p-2 m-2" />
                        </div>

                    </div>
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 p-2">Message</label>
                        <textarea id="message" className="w-full p-4 border border-[#3050d1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    
        
                        <button type="submit" className=" mt-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mb-3">Submit</button>
                </form>
            </div>
            
            <div>
                <div className="flex p-3 mt-9">
                    <div className="flex items-center p-2">
                        <AiOutlineMail className="scale-150"/>
                    </div>
                    <p type="email" className="p-2 mx-3">Info@iamkibet.com</p>
                </div>
                <div className="flex p-3">
                    <div className="flex items-center p-2">
                        <AiOutlinePhone className="scale-150"/>
                    </div>
                    <p type="email" className="p-2 mx-3">+254 720449012</p>
                </div>
                <div className="flex p-3">
                    <div className="flex items-center p-2">
                        <IoLocationOutline className="scale-150"/>
                    </div>
                    <p type="email" className="p-2 mx-3">Kenya</p>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Contacts