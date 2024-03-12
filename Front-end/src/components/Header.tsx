import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { PersonIcon } from "@radix-ui/react-icons";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "@radix-ui/react-icons";
// import '../index.css';

const Header = () => {
  console.log("This is a Header component");
  return (
    <>
      <HoverCard.Root openDelay={0}>
        <nav className="header-styles bg-transparent py-4 px-6 flex items-center justify-between shadow-md">
          <h1 className="text-3xl font-bold">L'Avenir du Passé</h1>
          <HoverCard.Trigger asChild>
            <PersonIcon className="w-12 h-12" />
          </HoverCard.Trigger>
          <HoverCard.Portal>
          <HoverCard.Content className="HoverCardContent" sideOffset={5}>
            <div>
              <ul>
                <a href="/Profile"><li>Profil</li></a>
                <a href="/Post"><li>Poster</li></a>
                <a href="/BackOffice"><li>Backoffice</li></a>
              </ul>
            </div>
          </HoverCard.Content>
          </HoverCard.Portal>
          <CardStackPlusIcon className="w-12 h-12" />
          <a href= "/Homepage"><HomeIcon className="w-12 h-12" /></a>
        </nav>
      </HoverCard.Root>
    </>
  );
};

export default Header;
