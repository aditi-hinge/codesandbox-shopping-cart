import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
import ProductList from "./pages/ProductList";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}
