import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  console.log("helloWorld");

  const history = useNavigate();

  // Etats permettant de stocker des valeurs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Gestion d'évènements pour le changement d'état
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // // Gestion d'évènements pour la validation du form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le comportement par défaut du form

    try {
      const response = await fetch("../routes/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        history("/homepage");
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
      <h1 className="text-xl font-bold text-center">
        Connecte-toi à toi-même et rencontre Dieu (qui est une femme hamster, CHEH !)
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <fieldset className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="username">
            Nom :
          </label>
          <input
            className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            id="name"
            placeholder="Jean-Beignet"
            value={username}
            onChange={handleUsernameChange}
          />
        </fieldset>
        <fieldset className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="mdp">
            Mot de Passe :
          </label>
          <input
            className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            id="username"
            type="password"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
          />
        </fieldset>
        <button
          type="submit"
          className="font-helvetica border border-solid border-gray-400 rounded-lg p-2 bg-amber-800 bg-opacity-10
          transition duration-300 ease-in-out hover:bg-red-800 hover:bg-opacity-80 hover:text-white"
        >
          Me connecter
        </button>
      </form>
    </>
  );
};

export default Login;
