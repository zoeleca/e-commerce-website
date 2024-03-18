import BackOffice from "./pages/BackOffice";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Page404 from "./pages/Page404";

import Footer from "./components/footer";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetail";
import NotFoundPage from "./components/NotFoundPage";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
          <Route path="/backoffice" element={<BackOffice />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
