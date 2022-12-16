import React from "react";
import "./App.css";
import HelloWorld from "./Components/HelloWorld";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Asep" />
      <Footer />
    </div>
  );
}

export default App;
