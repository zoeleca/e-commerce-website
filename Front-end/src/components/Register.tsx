import React, { useState, ChangeEvent, FormEvent } from "react";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState(''); // État pour le nom
  const [email, setEmail] = useState(''); // État pour l'e-mail
  const [password, setPassword] = useState(''); // État pour le mot de passe
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Validation de l'e-mail avec une expression régulière
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Vérifiez que les valeurs ne sont pas vides et que l'e-mail est valide avant de les enregistrer
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '' && isValidEmail) {
      // Vous pouvez maintenant utiliser ces valeurs comme bon vous semble
      console.log("Nom:", name, "Email:", email, "Mot de passe:", password);

      // Ajoutez ici le code pour effectuer l'enregistrement, par exemple, en appelant une fonction ou en utilisant une API
    }
  };

  return (
    <form onSubmit={handleRegister}>
        <h2>Register</h2>
      <h5>Nom</h5>
      <input type="text" value={name} onChange={handleNameChange} />
      <h5>Email</h5>
      <input type="text" value={email} onChange={handleEmailChange} />
      {!isValidEmail && <p style={{ color: 'red' }}>L'e-mail n'est pas valide.</p>}
      <h5>Mot de passe</h5>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button type="submit">
        S'inscrire
      </button>
    </form>
  );
};

export default RegisterForm;
