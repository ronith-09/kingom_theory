
import React, { useState } from "react"; // UseState for state handling

import contract from "./web3Service";

const RegisterKYC = () => {
  const [panCard, setPanCard] = useState("");
  const [participantID, setParticipantID] = useState("");

  const registerKYC = async () => {
    try {
      const tx = await contract.approveKYC(panCard);
      await tx.wait();
      const id = await contract.getParticipantIDByKYC(panCard);
      setParticipantID(id);
      alert(`Your Participant ID: ${id}`);
    } catch (error) {
      console.error("KYC Registration Failed", error);
    }
  };

  return (
    <div>
      <h2>Register KYC</h2>
      <input
        type="text"
        placeholder="Enter PAN Card"
        value={panCard}
        onChange={(e) => setPanCard(e.target.value)}
      />
      <button onClick={registerKYC}>Register</button>
      {participantID && <p>Your ID: {participantID}</p>}
    </div>
  );
};

export default RegisterKYC;
