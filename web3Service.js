import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";

// Log the contract address to check if it's valid
console.log("🚀 Contract Address:", CONTRACT_ADDRESS);
console.log("✅ Is Valid Address:", Web3.utils.isAddress(CONTRACT_ADDRESS));

const web3 = new Web3("https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID");

// Ensure the contract address is a valid Ethereum address
if (!CONTRACT_ADDRESS || !Web3.utils.isAddress(CONTRACT_ADDRESS)) {
    throw new Error("❌ ERROR: Invalid contract address. Please check your config.js file.");
}

// Create the contract instance
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

export default contract;
