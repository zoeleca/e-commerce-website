import Layout from "./pages/Layout";
import Product from "./pages/Product";
import BackOffice from "./pages/BackOffice.jsx";


import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";




function App() {
  return (
    <>
<ScrollToTop />
      <Routes>
        Route vers "l'interface", seule la navbar est chargée
        <Route path="/" element={<Layout />}>
          {/* Routes vers le contenu */}
          <Route path="/" element={<HomePage />} />
          {/* Route dynamique vers un résultat de recherche, pour l'instant il faut le nom complet du produit */}
          <Route path="shop" element={<Shop />} />
          {/* Route dynamique vers un résultat de recherche, pour l'instant il faut le nom complet du produit */}
          <Route path="shop/search/:query" element={<Shop />} />
          {/* Route dynamique vers tous les items d'une catégorie*/}
          <Route path="shop/itemscateg/:query" element={<Shop />} />
          {/* Route dynamique vers chaque page produit selon l'id */}
          <Route path=":productId" element={<Product />} />
          {/* Route dynamique vers la page de contact */}
          <Route path="contact" element={<ContactForm />} />
          {/* route vers le back office avec un "tampon" protectedroute qui vérifie les données de session*/}
          <Route
            path="back-office"
            element={
              <ProtectedRoute>
                <BackOffice />
              </ProtectedRoute>
            }
          />
          {/* route vers la page de login */}
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>    </>
  );
}

export default App;