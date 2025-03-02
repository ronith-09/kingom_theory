
import React, { useState } from "react"; // UseState for state handling

import contract from "./web3Service";

const ViewBalance = () => {
  const [participantID, setParticipantID] = useState("");
  const [balance, setBalance] = useState("");

  const getBalance = async () => {
    const balance = await contract.getBalance(participantID);
    setBalance(balance.toString());
  };

  return (
    <div>
      <h2>Check Balance</h2>
      <input
        type="text"
        placeholder="Your Participant ID"
        value={participantID}
        onChange={(e) => setParticipantID(e.target.value)}
      />
      <button onClick={getBalance}>Check Balance</button>
      {balance && <p>Your Balance: {balance} IND</p>}
    </div>
  );
};

export default ViewBalance;
 