import React from 'react';
import { Link } from 'react-router-dom';
interface HomePageProps {
  // Define any props you might pass to the HomePage component
  title: string;
}

const HomePage: React.FC<HomePageProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Welcome to the homepage!</p>
      <Link to="/product">Go to Other Page</Link>
    </div>
  );
};

export default HomePage;