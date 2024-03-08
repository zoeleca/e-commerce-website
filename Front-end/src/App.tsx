import Layout from "./pages/Layout";
import Product from "./pages/Product";
import Footer from './components/footer';
import Sidebar from './components/sidedbar'; 



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";




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