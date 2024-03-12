import React from "react";
import * as HoverCard from '@radix-ui/react-hover-card';
import { PersonIcon } from '@radix-ui/react-icons';
import { CardStackPlusIcon } from '@radix-ui/react-icons';
import { HomeIcon } from '@radix-ui/react-icons';
import '../index.css';


const Header = () => {

    console.log("This is a Header component")
    return (
    <>
     <nav className="header-styles">
        <h1>L'Avenir du Passé</h1>
        <PersonIcon />
        <CardStackPlusIcon />
        <HomeIcon />
        
      </nav>
    </>
    )
}

export default Header;