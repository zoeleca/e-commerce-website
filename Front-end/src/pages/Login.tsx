import React, { useState } from "react";

const Login: React.FC = () => {
  console.log("helloWorld");

  
    // State to store input values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Event handler for input change
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

  // Event handler for form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

      try {
        const response = await fetch("../routes/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        });

        if (response.ok) {
          // Successful login, handle accordingly (e.g., redirect user)
          console.log("Login successful!");
        } else {
          // Handle unsuccessful login (e.g., display error message)
          console.error("Login failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error");
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
