import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
import ProductList from "./pages/ProductList";
// import SingleProduct from "./pages/SingleProduct";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}
