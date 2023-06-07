import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";



const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto mb-3 ">
         <h1 className="font-bold p-4 w-full flex justify-center mb-3 text-[50px]">Contact Us</h1>
         <div className="flex">
            <form className="w-full max-w-lg m-3 p-4">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    First Name
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                />
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    E-mail
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                ></textarea>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                <button
                    className="shadow bg-[#3050d1] hover:bg-[#7c85a7] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                >
                    Send
                </button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
            </form>
            <div className="ml-10 mt-10">
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
  );
};

export default Contact;
