import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {

  const history = useNavigate();

  // Etats permettant de stocker des valeurs
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  // Gestion d'évènements pour le changement d'état
  const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Gestion d'évènements pour la validation du form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le comportement par défaut du form

    try {
      const response = await fetch("../Back-end/routes/login.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, password }),
      });

      if (response.ok) {
        history("/");
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
  <h1 className="text-xl font-bold text-center mt-8 mb-6">
    Connecte-toi à toi-même et rencontre Dieu (qui est une femme hamster, CHEH !)
  </h1>
  <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mb-8">
    <fieldset className="mb-6">
      <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="userEmail">
        Email :
      </label>
      <input
        className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        required
        id="userEmail"
        placeholder="jean-beignet@email.com"
        value={userEmail}
        onChange={handleUserEmailChange}
      />
    </fieldset>
    <fieldset className="mb-6">
      <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="password">
        Mot de Passe :
      </label>
      <input
        className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        required
        id="password"
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
