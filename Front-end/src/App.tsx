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