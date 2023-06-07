import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import Listings from "./Listings";
import Quality from "./Quality";
import Contacts from "./Contacts";
import Navbar from "../Navbar"

const Home = () => {
    return (
        <div>
            < Navbar />
            < Hero />
            < Content />
            < Listings />
            < Quality />
            < Contacts />
        </div>
    )
}

export default Home