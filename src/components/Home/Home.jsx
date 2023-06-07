import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import Listings from "./List";
import Quality from "./Quality";
import Contacts from "./Contact";
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