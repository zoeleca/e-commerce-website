import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { PersonIcon } from '@radix-ui/react-icons'
import LoginForm from './LoginForm';

import './style.css';

{/*fonction pour le Header*/ }
const Header = () => (
  // div qui correspond a au bouton incription
  <HoverCard.Root>
  <HoverCard.Trigger asChild>
    {/* la div en dessous sert a affichier l'image du bouton */}
    <a
      className="ImageTrigger"
      target="_blank"
      rel="noreferrer noopener"
    >
      <PersonIcon  className="Image normal" />  
    </a>
  </HoverCard.Trigger>
  <HoverCard.Portal>
    <HoverCard.Content className="HoverCardContent" sideOffset={5}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div>
            {/* la div en dessous corespond au formulaire incription  */}
          </div>
          <div className="Text" style={{display: 'flex', flexDirection: 'column', gap: 0 }}> 
          {/* <form onSubmit={}> */}
          <LoginForm/>
          {/* </form> */}
          </div>
          <div style={{ display: 'flex', gap: 15 }}>
            <div style={{ display: 'flex', gap: 5 }}>
            </div>
            <div style={{ display: 'flex', gap: 5 }}>
            </div>
          </div>
        </div>  
      </div>

      <HoverCard.Arrow className="HoverCardArrow" />
    </HoverCard.Content>
  </HoverCard.Portal>
</HoverCard.Root>

);

export default Header;