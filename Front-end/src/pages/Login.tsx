import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  console.log("helloWorld");

  const history = useNavigate()
  
    // Etats permettant de stocker des valeurs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Gestion d'évènements pour le changement d'état
    const handleUsernameChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setUsername(event.target.value);
    };

    const handlePasswordChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setPassword(event.target.value);
    };

  // // Gestion d'évènements pour la validation du form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le comportement par défaut du form

      try {
        const response = await fetch("../routes/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            
          history("/homepage")
          console.log("Connexion réussie");
        } else {
          
          console.error("La connexion a échoué:", response.statusText);
        }
      } catch (error) {
        console.error("Erreur");
      }
    };

    return (
      <>
        <h1>
          Connecte-toi à toi-même et rencontre Dieu (qui est une femme hamster
          CHEH)
        </h1>
        <form onSubmit={handleSubmit}>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Nom :
          </label>
          <input
            className="Input"
            id="name"
            placeholder="Jean-Beignet"
            value={username}
            onChange={handleUsernameChange}
          />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="mdp">
            Mot de Passe :
          </label>
          <input
            className="Input"
            id="username"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
          />
        </fieldset>
        <button type="submit">Validay</button>
        </form>
      </>
    );
  };


export default Login;
