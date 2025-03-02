
import React, { useState } from "react"; // UseState for state handling

import { ethers } from "ethers";
import contract from "./web3Service";
import { OWNER_WALLET_ADDRESS, RPC_URL } from "./config";

const provider = new ethers.JsonRpcProvider(RPC_URL);
const signer = new ethers.Wallet("OWNER_PRIVATE_KEY", provider);
const contractWithSigner = contract.connect(signer);

const ApproveBuy = () => {
  const [participantID, setParticipantID] = useState("");

  const approveBuy = async () => {
    try {
      const tx = await contractWithSigner.approveBuyIND(participantID);
      await tx.wait();
      alert("Transaction Approved!");
    } catch (error) {
      console.error("Approval Failed", error);
    }
  };

  return (
    <div>
      <h2>Approve Buy Requests</h2>
      <input
        type="text"
        placeholder="Participant ID"
        value={participantID}
        onChange={(e) => setParticipantID(e.target.value)}
      />
      <button onClick={approveBuy}>Approve</button>
    </div>
  );
};

export default ApproveBuy;
 