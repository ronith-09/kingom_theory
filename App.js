import React from "react";
import RegisterKYC from "./RegisterKYC";
import BuyIND from "./BuyIND";
import ApproveBuy from "./ApproveBuy";
import ViewBalance from "./ViewBalance";

function App() {
  return (
    <div>
      <h1>INDIA Token System</h1>
      <RegisterKYC />
      <BuyIND />
      <ApproveBuy />
      <ViewBalance />
    </div>
  );
}

export default App;
