import React from "react";
import * as HoverCard from '@radix-ui/react-hover-card';
import { PersonIcon } from '@radix-ui/react-icons';
import { CardStackPlusIcon } from '@radix-ui/react-icons';
import { HomeIcon } from '@radix-ui/react-icons';
// import '../index.css';


const Header = () => {

    console.log("This is a Header component")
    return (
    <>
<nav className="header-styles bg-transparent py-4 px-6 flex items-center justify-between shadow-md">
    <h1 className="text-3xl font-bold">L'Avenir du Passé</h1>
    <PersonIcon className="w-12 h-12" />
    <CardStackPlusIcon className="w-12 h-12" />
    <HomeIcon className="w-12 h-12" />
</nav>

    </>
    )
}

export default Header;