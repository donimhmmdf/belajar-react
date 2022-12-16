import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="relative min-h-screen pb-10">
      <Router>
        <Header />
        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/products/:id" element={<Product />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
