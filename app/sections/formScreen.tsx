import Link from 'next/link';
import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import {lol} from './tr';

// Replace with your contract's address
const contractAddress = '';

// Full ABI for the contract

const {ethers} = require('ethers')
const contractABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'getContractBalance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_walletAddress', type: 'address' },
      { internalType: 'bool', name: '_householdComposition', type: 'bool' },
      { internalType: 'bool', name: '_emergencyNeeds', type: 'bool' },
      { internalType: 'bool', name: '_grossIncome', type: 'bool' },
      { internalType: 'bool', name: '_primaryResidence', type: 'bool' },
      { internalType: 'bool', name: '_destroyed', type: 'bool' },
    ],
    name: 'createVictim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'victims',
    outputs: [
      { internalType: 'bool', name: 'householdComposition', type: 'bool' },
      { internalType: 'bool', name: 'emergencyNeeds', type: 'bool' },
      { internalType: 'bool', name: 'grossIncome', type: 'bool' },
      { internalType: 'bool', name: 'primaryResidence', type: 'bool' },
      { internalType: 'bool', name: 'destroyed', type: 'bool' },
      { internalType: 'uint256', name: 'amountEligible', type: 'uint256' },
      { internalType: 'bool', name: 'hasReceivedFunds', type: 'bool' },
      { internalType: 'address', name: 'walletAddress', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

// Form data interface
interface FormData {
  familyCount: boolean;
  emergencyNeeds: boolean;
  income: boolean;
  isPrimaryResidence: boolean;
  isHomeDestroyed: boolean;
}

const VictimReliefForm = () => {
  const [formData, setFormData] = useState<FormData>({
    familyCount: false,
    emergencyNeeds: false,
    income: false,
    isPrimaryResidence: false,
    isHomeDestroyed: false,
  });

  const [loading, setLoading] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState<string | null>(null);

  // Set up ethers.js provider, wallet, and contract
  async function setup() {
    // Connect to Ethereum provider and create signer (e.g., MetaMask, Infura)
    const provider = new ethers.providers.JsonRpcProvider("");
    const wallet = new ethers.Wallet("", provider); // Be careful with private keys!
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);
    
    return { contract, wallet, provider };
  }

//   const createVictim = async () => {
//     setLoading(true);
//     setTransactionMessage(null);

//     try {
//       const { contract } = await setup();
//       const walletAddress = ""; // Replace with actual victim's address

//       // Convert form data to boolean values
//       const householdComposition = formData.familyCount === 'Yes';
//       const emergencyNeeds = formData.emergencyNeeds === 'Yes';
//       const grossIncome = formData.income === 'Yes';
//       const primaryResidence = formData.isPrimaryResidence === 'Yes';
//       const destroyed = formData.isHomeDestroyed === 'Yes';

//       // Call the createVictim function with form data
//       const tx = await contract.createVictim(
//         walletAddress,
//         householdComposition,
//         emergencyNeeds,
//         grossIncome,
//         primaryResidence,
//         destroyed
//       );
//       const receipt = await tx.wait();

//       setTransactionMessage(`Transaction successful! Hash: ${receipt.transactionHash}`);
//     } catch (error) {
//       setTransactionMessage(`Transaction failed: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    lol(formData.familyCount, formData.emergencyNeeds, formData.income, formData.isPrimaryResidence, formData.isHomeDestroyed);
    setFormData({
      familyCount: false,
      emergencyNeeds: false,
      income: false,
      isPrimaryResidence: false,
      isHomeDestroyed: false,
    });
  };


  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white antialiased selection:bg-rose-300 selection:text-rose-800 hide-scrollbar">
      <div className="absolute -z-10 min-h-full w-full bg-gradient-to-r from-orange-100 to-red-400"></div>
      <h1 className="text-4xl font-bold text-black mt-6 mb-[100px] text-center">
        Victim Relief Request Form
      </h1>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl p-6 rounded-lg bg-white shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-6">
              {['familyCount', 'emergencyNeeds', 'income', 'isPrimaryResidence', 'isHomeDestroyed'].map(field => (
                <div key={field} className="flex flex-col">
                  <label htmlFor={field} className="text-sm font-medium text-gray-700 mb-1">
                    {field.replace(/([A-Z])/g, ' $1').replace('Count', ' Count ≥ 4').replace('Income', ' Household Income ≥ $150,000')}
                  </label>
                  <select
                    id={field}
                    name={field}
                    value={formData[field as keyof FormData]}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 text-black rounded-md focus:outline-none"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none duration-300 transition-colors"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
          {transactionMessage && (
            <p className="mt-4 text-center text-sm text-gray-800">{transactionMessage}</p>
          )}
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-10">
        <Link href="/" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white">
          ← Back to Dashboard
        </Link>
        <Link href="/map" className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors text-white flex items-center">
          <span>Proceed to Map</span>
          <MdArrowOutward className="text-xl ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default VictimReliefForm;
