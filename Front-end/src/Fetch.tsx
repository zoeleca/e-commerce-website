import Layout from "./pages/Layout";
import Product from "./pages/Product";
import BackOffice from "./pages/BackOffice.jsx";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch request function lunched");
      try {
        const response = await axios.get("http://localhost:3000"); // Ici on essaie de faire une requête entre 2 origines différentes.  (CORS headers)
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Express API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
