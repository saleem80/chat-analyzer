import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component }  from 'react';
import ContactUs from "./components/ContactUs";
import ChatAnalysed from "./components/ChatAnalysed";
import Home from "./components/Home";
import SuccessfulPayment from "./components/SuccessfulPayment";
import PaymentForm from "./components/PaymentForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/analysed" element={<ChatAnalysed />} />
        <Route path='/success' element={<SuccessfulPayment />} />
        <Route path='/form' element={<PaymentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
