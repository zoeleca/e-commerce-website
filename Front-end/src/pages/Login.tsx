import React from 'react';
interface LoginProps {
  // Define any props you might pass to the HomePage component
  title: string;
}

const Login: React.FC<LoginProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Welcome to the backoffice!</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default Login;