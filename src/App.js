import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import painting_banner from "./Components/Assets/banner_painting.png";
import festive_banner from "./Components/Assets/banner_festive.png";
import plants_banner from "./Components/Assets/banner_plants.png";
import mirror_banner from "./Components/Assets/banner_mirror.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route
            path="/painting"
            element={<ShopCategory banner={painting_banner} category="painting" />}
          />
          <Route
            path="/festive"
            element={<ShopCategory banner={festive_banner} category="festive" />}
          />
          <Route
            path="/plants"
            element={<ShopCategory banner={plants_banner} category="plants" />}
          />
          <Route
            path="/mirror"
            element={<ShopCategory banner={mirror_banner} category="mirror" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

