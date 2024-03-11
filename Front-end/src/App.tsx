//import Layout from './pages/Layout';
//import Product from './pages/Product';

import BackOffice from './pages/BackOffice';
import HomePage from "./pages/HomePage";
import Login from './pages/Login';
import Post from './pages/Post';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';

import Footer from './components/Footer';
import Header from './components/Header';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductDetails />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/backoffice" element={<BackOffice/>}/>

          </Routes>
      </Router>
      <Header/>
      <Footer/>
    </>
  );
}

export default App;