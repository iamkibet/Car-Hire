import react from "react";
import Navbar from "../Navbar";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Contacts = () => {
    return (
        <div>
            < Navbar />
            <div style={{ backgroundImage: "url('src/assets/Car4.jpg')" }}>
                <div className="bg-[#0f3052] opacity-90">
                    <div className="flex max-w-5xl mx-auto">
                        <div className="flex justify-between text-white">
                            <div className="mt-10">
                                <h1 className="text-5xl font-bold p-3 mb-3">
                                    Contact Us
                                </h1>
                                <p className="text-xl p-3">
                                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit am.
                                </p>
                            </div>

                            <form className="w-full max-w-lg m-3 p-4 text-white mt-10">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    placeholder="Jane"
                                />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
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
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                <textarea
                                    className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                    id="message"
                                    placeholder="Message"
                                ></textarea>
                                </div>
                            </div>
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3">
                                <button
                                    className="shadow bg-[#faa152] hover:bg-[#7c85a7] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded uppercase"
                                    type="button"
                                >
                                    Submit
                                </button>
                                </div>
                                <div className="md:w-2/3"></div>
                            </div>
                            </form>
                    </div>
                </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold flex justify-center w-full p-4 m-5 mt-10">
                    Frequently Asked Questions
                </h1>
                    <div className="bg-white p-16 rounded">
                        <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                        <button
                            type="button"
                            className="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl"
                            data-accordion-target="#accordion-collapse-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-collapse-body-1"
                        >
                            <span>Are you Legit?</span>
                            <FaChevronUp className="w-6 h-6 ml-2" />
                        </button>
                        </h2>
                        <div
                        id="accordion-collapse-body-1"
                        aria-labelledby="accordion-collapse-heading-1"
                        >
                        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit am.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to{' '}
                            <a href="#" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline">
                                Contact US
                            </a>{' '}
                            and start developing websites even faster with components on top of Tailwind CSS.
                            </p>
                        </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                        <button
                            type="button"
                            className="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                            data-accordion-target="#accordion-collapse-body-2"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-2"
                        >
                            <span>When Should i Return The car</span>
                            <FaChevronDown className="w-6 h-6 ml-2" />
                        </button>
                        </h2>
                        <div
                        id="accordion-collapse-body-2"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-2"
                        >
                            <div className="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit am.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                Check out the{' '}
                                <a href="/" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline">
                                    Figma design system
                                </a>{' '}
                                based on the utility classes from Tailwind CSS and components from Flowbite.
                                </p>
                            </div>
                        </div>
                            <h2 id="accordion-collapse-heading-3">
                            <button
                                type="button"
                                className="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-t-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                data-accordion-target="#accordion-collapse-body-3"
                                aria-expanded="false"
                                aria-controls="accordion-collapse-body-3"
                            >
                                <span>Why You</span>
                                <FaChevronDown className="w-6 h-6 ml-2" />
                            </button>
                            </h2>
                            <div
                            id="accordion-collapse-body-3"
                            className="hidden"
                            aria-labelledby="accordion-collapse-heading-3"
                            >
                            <div className="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The main difference is that the core components from Flowbite are open source under the MIT license,
                                whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
                                standalone components, whereas Tailwind UI offers sections.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts