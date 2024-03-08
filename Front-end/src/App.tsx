import HomePage from "./pages/HomePage";
import BackOffice from "./pages/BackOffice";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from './components/footer';
import Sidebar from './components/sidedbar'; 



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// @TODO: 
// une route 
// les routes privées pour les comptes utilisateurs et le BackOffice
// Si pas le temps utilisteur, mettre .components/login pour protéger l'accès de BackOffice en route publique
//

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<Product />}/>
          <Route path="/login" element={<Login title={"Connection"} />}/>
          <Route path="/layout" element={<Layout title={"titre"}/>}/>
          {/* <Route path="/BackOffice" element={<BackOffice title={"titre"}/>}/> */}
          </Routes>
      </Router>
      <Footer/>
      <Sidebar/>
    </>
  );
}

export default App;