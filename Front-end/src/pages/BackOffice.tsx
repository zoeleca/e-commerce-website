import React from 'react';
interface BackOfficeProps {
  // Define any props you might pass to the HomePage component
  title: string;
}

const BackOffice: React.FC<BackOfficeProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Welcome to the backoffice!</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default BackOffice;