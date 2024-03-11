import React, { useState } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { PersonIcon } from '@radix-ui/react-icons';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import './style.css';

const Header = () => {
  // État local pour suivre si le formulaire d'inscription doit être affiché ou non
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  // Fonction pour basculer entre le formulaire de connexion et le formulaire d'inscription
  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        {/* Bouton déclencheur du hover card (exemple avec une icône person) */}
        <a
          className="ImageTrigger"
          target="_blank"
          rel="noreferrer noopener"
        >
          <PersonIcon className="Image normal" />
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        {/* Contenu du hover card */}
        <HoverCard.Content className="HoverCardContent" sideOffset={5}>
          {/* Conteneur principal avec des éléments flexbox */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <div>
                {/* Placeholder pour le formulaire d'inscription */}
              </div>
              <div className="Text" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {/* Condition pour afficher soit le formulaire de connexion, soit le formulaire d'inscription */}
                {showRegisterForm ? (
                  <RegisterForm />
                ) : (
                  <>
                    <LoginForm />
                    {/* Bouton pour basculer entre les formulaires */}
                    <button onClick={toggleForm}>Inscrivez-vous</button>
                  </>
                )}
              </div>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {/* Placeholder pour d'autres éléments si nécessaire */}
                </div>
                <div style={{ display: 'flex', gap: 5 }}>
                  {/* Placeholder pour d'autres éléments si nécessaire */}
                </div>
              </div>
            </div>
          </div>

          {/* Flèche associée au hover card */}
          <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default Header;
