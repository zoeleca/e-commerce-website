import React from 'react';
interface LayoutProps {
  // Define any props you might pass to the HomePage component
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Welcome to the backoffice!</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default Layout;