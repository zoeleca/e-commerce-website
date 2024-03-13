import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { PersonIcon } from "@radix-ui/react-icons";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "@radix-ui/react-icons";

const Header = () => {
  console.log("This is a Header component");
  return (
    <HoverCard.Root openDelay={0}>
      <nav className="bg-transparent py-4 px-6 flex items-center justify-between shadow-md">
        <div>
          <a href="/"><h1 className="text-3xl font-bold">L'Avenir du Passé</h1></a>
        </div>
        <div className="flex items-center space-x-4">
          <HoverCard.Trigger asChild>
            <PersonIcon className="w-12 h-12" />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className="HoverCardContent" sideOffset={5}>
              <div>
                <ul className="bg-white">
                  <a href="/Profile"><li>Mon profil</li></a>
                  <a href="/Calendar"><li>Mes événements</li></a>
                  <a href="/BackOffice"><li>Mon suivi</li></a>
                </ul>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
          <a href="/Post"><CardStackPlusIcon className="w-12 h-12" /></a>
          <a href="/"><HomeIcon className="w-12 h-12" /></a>
        </div>
      </nav>
    </HoverCard.Root>
  );
};

export default Header;
