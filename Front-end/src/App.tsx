//import Layout from './pages/Layout';
//import Product from './pages/Product';
import Footer from './components/footer';
import Sidebar from './components/sidedbar'; 
import Login from './components/LoginForm'



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage/>} />
//           {/*<Route path="/product" element={<Product />}/>*/}
//           <Route path="/login" element={<Login/>}/>
//           {/*<Route path="/layout" element={<Layout title={"titre"}/>}/>*/}
//           {/* <Route path="/BackOffice" element={<BackOffice title={"titre"}/>}/> */}
//           </Routes>
//       </Router>
//       <Footer/>
//       <Sidebar/>
//     </>
//   );
// }

export default App;