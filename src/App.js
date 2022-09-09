import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/Product/AllProducts";
import Products from "./pages/Product/AllProducts";
import Product from "./pages/Product/Products/Product";
import SignIn from "./pages/Signup/SignIn";
import Signup from "./pages/Signup/Signup";


function App() {
  return (
    <>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<SignIn />}></Route>
          <Route path="/Register" element={<Signup />}></Route>
          <Route path="/productDetails" element={<Product />}></Route>
          <Route path="/product" element={<AllProducts />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
