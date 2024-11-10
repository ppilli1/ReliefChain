"use client";

import React from 'react';
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";

const TransactionScreen: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white antialiased selection:bg-rose-300 selection:text-rose-800 hide-scrollbar">
      <div className="absolute -z-10 min-h-full w-full bg-gradient-to-r from-orange-100 to-red-400"></div>
      <div className="p-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-8">Transaction Details</h1>
          <div className="wallet-container mb-8">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon="wallet"
                  href="https://keys.coinbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg p-8 rounded-lg">
            <p className="text-xl text-center">Transaction Details Coming Soon</p>
          </div>

          {/* Navigation Section */}
          <div className="mt-8 flex justify-between w-full max-w-4xl">
            <Link 
              href="/map" 
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-white"
            >
              <span>← Back to Map</span>
            </Link>
            <Link 
              href="/confirm" 
              className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 text-white"
            >
              <span>Proceed to Confirmation</span>
              <MdArrowOutward className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionScreen;