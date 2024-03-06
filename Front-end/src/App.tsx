import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {


  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await axios.get<UserData>('https://pokeapi.co/api/v2/pokemon/ditto');
        
        // Update the state with the fetched user data
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        // Set loading to false after the request completes (whether successful or not)
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h1>User Information</h1>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default App
