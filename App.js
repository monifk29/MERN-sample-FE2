import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { PrivateComponent } from "./components/PrivateComponent";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route element={<PrivateComponent />}>
          <Route
            path="/"
            element={
              <h1>
                <ProductList />
              </h1>
            }
          />
          <Route path="/add" element={<AddProduct />} />
          <Route
            path="/update/:id"
            element={
              <h1>
                <UpdateProduct />
              </h1>
            }
          />
          {/* <Route path="/logout" element={<h1>4</h1>}/> */}
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
