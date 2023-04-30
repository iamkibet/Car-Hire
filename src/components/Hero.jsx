import React from "react";


const Hero = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1>
                            Rental cars From just 
                            <span>$20/Day</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div>
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
                                        15%off
                                    </span>
                                </h4>
                                <div>
                                        <p>
                                            First Time Reservations
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="/">Redeem</a>
                    </div>
                </div> 
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <form action="/">
                                <p>
                                    <label htmlFor="/"> Car Type</label>
                                    <select name="/" id="/">
                                        <option value="/">Car Type</option>
                                        <option value="/">Sedan</option>
                                        <option value="/">Van</option>
                                        <option value="/">MiniVan</option>
                                    </select>
                                </p>
                                <p>
                                    <label htmlFor="/">Pick Up Location</label>
                                    <input type="text" placeholder="Pick Up Location"/>
                                </p>
                                <p>
                                    <label htmlFor="/">Pick Up Date</label>
                                    <input type="text" placeholder="Pick Up Date"/>
                                </p>
                                <p>
                                    <label htmlFor="/">Pick Up Time</label>
                                    <input type="text" placeholder="Pick Up Time"/>
                                </p>
                                <p>
                                    <label htmlFor="/">Drop Off Date</label>
                                    <input type="text" placeholder="Drop Off Date"/>
                                </p>
                                <p>
                                    <label htmlFor="/">Drop Off Time</label>
                                    <input type="text" placeholder="Drop Off Time"/>
                                </p>
                                <div>
                                    <button type="submit">Request Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>
                            <img src="src\assets\carhero.png" alt="car-rental" />
                        </span>
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