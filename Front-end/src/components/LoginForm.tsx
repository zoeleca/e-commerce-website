import React, { useState, ChangeEvent, FormEvent } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState(''); // État pour l'e-mail
  const [password, setPassword] = useState(''); // État pour le mot de passe
  const [savedValues, setSavedValues] = useState<Array<{ email: string; password: string }>>([]);
  const [isValidEmail, setIsValidEmail] = useState(true);

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

  const handleSaveValue = (e: FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Vérifiez que les valeurs ne sont pas vides et que l'e-mail est valide avant de les enregistrer
    if (email.trim() !== '' && password.trim() !== '' && isValidEmail) {
      setSavedValues([...savedValues, { email, password }]);
      setEmail('');
      setPassword('');
    }
  };

  return (
  
    <form onSubmit={handleSaveValue}>
        
      <h5>Email</h5>
      <input type="text" value={email} onChange={handleEmailChange} />
      {!isValidEmail && <p style={{ color: 'red' }}>L'e-mail n'est pas valide.</p>}
      <h5>Mot de passe</h5>
      <input type="password" value={password} onChange={handlePasswordChange} /><br/>
      <button type="submit">
        Enregistrement
      </button>

      {/* Afficher les valeurs enregistrées  */}
      <ul>
        {savedValues.map((value, index) => (
          <li key={index}>{`Email: ${value.email}, Mot de passe: ${value.password}`}</li>
        ))}
      </ul>
    </form>
  );
};

export default LoginForm;
