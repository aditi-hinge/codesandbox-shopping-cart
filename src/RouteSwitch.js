import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
// import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
