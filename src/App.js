import React from "react";
import Header from "./komponents/Header";
import "./App.css";
import Footer from "./komponents/Footer";
import SmsFixed from "./komponents/SmsFixed";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Footer />
      <SmsFixed />
    </div>
  );
}

export default App;
