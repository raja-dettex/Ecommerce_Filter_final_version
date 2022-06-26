import "./styles.css";
// import Navbar from "./components/Navbar/Navbar";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App ">
      {/* <Navbar /> */}
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Product />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
