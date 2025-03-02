
import React, { useState } from "react"; // UseState for state handling

import contract from "./web3Service";

const BuyIND = () => {
  const [participantID, setParticipantID] = useState("");
  const [amount, setAmount] = useState("");

  const requestToBuy = async () => {
    try {
      const tx = await contract.requestToBuyIND(participantID, amount);
      await tx.wait();
      alert(`Buy request sent for ${amount} IND`);
    } catch (error) {
      console.error("Buy Request Failed", error);
    }
  };

  return (
    <div>
      <h2>Buy IND Tokens</h2>
      <input
        type="text"
        placeholder="Your Participant ID"
        value={participantID}
        onChange={(e) => setParticipantID(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={requestToBuy}>Request to Buy</button>
    </div>
  );
};

export default BuyIND;
