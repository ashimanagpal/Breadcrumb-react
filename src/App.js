import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Breadcrumb from "./components/Breadcrumb";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetail />}
            errorElement={<Error />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
