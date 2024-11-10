const {ethers} = require("ethers");

// Replace with your contract's address
const contractAddress = "";

// Full ABI based on the provided Solidity code
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "getContractBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_walletAddress",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_householdComposition",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_emergencyNeeds",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_grossIncome",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_primaryResidence",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_destroyed",
                "type": "bool"
            }
        ],
        "name": "createVictim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "victims",
        "outputs": [
            {
                "internalType": "bool",
                "name": "householdComposition",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "emergencyNeeds",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "grossIncome",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "primaryResidence",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "destroyed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "amountEligible",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "hasReceivedFunds",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "walletAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

async function setup() {
    // Connect to Ethereum provider and create signer (e.g., MetaMask, Infura)
    const provider = new ethers.providers.JsonRpcProvider("");
    const wallet = new ethers.Wallet("", provider); // Be careful with private keys!
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);

    return { contract, wallet, provider };
}

// Function to create a victim with specified boolean inputs
async function createVictim(walletAddress, householdComposition, emergencyNeeds, grossIncome, primaryResidence, destroyed) {
    const { contract } = await setup();

    // Call the createVictim function with specified inputs
    const tx = await contract.createVictim(
        walletAddress,
        householdComposition,
        emergencyNeeds,
        grossIncome,
        primaryResidence,
        destroyed
    );
    const receipt = await tx.wait(); // Wait for transaction to be mined
    console.log("Transaction confirmed!");
    console.log("Transaction ID (Hash):", receipt.transactionHash);
}

// Example usage
export async function lol(p2, p3, p4, p5, p6) {
    try {
        // Create a victim with example data
        await createVictim(
            "", // Replace with an actual wallet address  ""
            p2,  // householdComposition
            p3, // emergencyNeeds
            p4,  // grossIncome
            p5, // primaryResidence
            p6  // destroyed
        );
    } catch (error) {
        console.error("Error:", error);
    }
}