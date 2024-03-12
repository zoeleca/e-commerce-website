//import Layout from './pages/Layout';
//import Product from './pages/Product';

import BackOffice from './pages/BackOffice';
import HomePage from "./pages/HomePage";
import Login from './pages/Login';
import Post from './pages/Post';
import Profile from './pages/Profile';

import Footer from './components/footer';
import Header from './components/Header';
import ProductDetails from './components/ProductDetail';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
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
      <Footer/>
    </>
  );
}

export default App;