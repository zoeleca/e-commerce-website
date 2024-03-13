import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { PersonIcon } from "@radix-ui/react-icons";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import { AvatarIcon } from "@radix-ui/react-icons";
import { CalendarIcon } from "@radix-ui/react-icons";
import { TableIcon } from "@radix-ui/react-icons";


const Header = () => {
  console.log("This is a Header component");
  return (
    <HoverCard.Root openDelay={0}>
      <nav className="bg-transparent py-4 px-6 flex items-center justify-between shadow-md">
        <div>
          <a href="/">
            <h1 className="text-3xl font-bold">L'Avenir du Passé</h1>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/Login">
            <PersonIcon className="w-12 h-12" />
          </a>
          <HoverCard.Trigger asChild>
            <AvatarIcon className="w-12 h-12" />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              className="bg-white p-4 w-64 h-auto"
              sideOffset={5}
            >
              <div>
                <ul>
                  <a href="/Profile">
                    <li className="border-b border-gray-200 py-2">
                      Mon profil
                    </li>
                  </a>
                  <a href="/Cart">
                    <li className="border-b border-gray-200 py-2">
                      Mon panier
                    </li>
                  </a>
                  <a href="/">
                    <li className="py-2">Mes ventes</li>
                  </a>
                </ul>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
          <a href="/Post">
            <CardStackPlusIcon className="w-12 h-12" />
          </a>
          <a href="/Events">
            <CalendarIcon className="w-12 h-12" />
          </a>
          <a href="/BackOffice">
            <TableIcon className="w-12 h-12" />
          </a>
        </div>
      </nav>
    </HoverCard.Root>
  );
};

export default Header;
