"use client";

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
import ArrowSvg from "../svg/ArrowSvg";
import ImageSvg from "../svg/Image";
import OnchainkitSvg from "../svg/OnchainKit";
import Link from "next/link";
import Image from "next/image";
import { PROJECT1, PROJECT2 } from "../constants";
import { VscErrorSmall } from "react-icons/vsc";
import { GiMedicines } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";
import { PiHurricaneDuotone } from "react-icons/pi";

interface Component {
  name: string;
  url: string;
}

interface Template {
  name: string;
  url: string;
}

const components: Component[] = [
  {
    name: "Transaction",
    url: "https://onchainkit.xyz/transaction/transaction",
  },
  { name: "Swap", url: "https://onchainkit.xyz/swap/swap" },
  { name: "Checkout", url: "https://onchainkit.xyz/checkout/checkout" },
  { name: "Wallet", url: "https://onchainkit.xyz/wallet/wallet" },
  { name: "Identity", url: "https://onchainkit.xyz/identity/identity" },
];

const templates: Template[] = [
  { name: "NFT", url: "https://github.com/coinbase/onchain-app-template" },
  {
    name: "Commerce",
    url: "https://github.com/coinbase/onchain-commerce-template",
  },
  { name: "Fund", url: "https://github.com/fakepixels/fund-component" },
];

const HomeScreen: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white antialiased selection:bg-rose-300 selection:text-rose-800 hide-scrollbar">
      <div className="absolute -z-10 min-h-full w-full bg-gradient-to-r from-orange-100 to-red-400"></div>
      <div className="flex flex-wrap mt-[100px]">
        <div className="w-1/2">
          <div className="flex items-center justify-center z-0 mt-20">
            <div className="max-w-4xl w-full p-4">
              <div className="w-1/3 mx-auto mb-6">
                <ImageSvg />
              </div>
              <div className="flex flex-col justify-center items-center mb-6">
                <h1 className="text-[3.5rem] text-red-600 my-custom-font">
                  ReliefChain
                </h1>
                <h2 className="text-[2rem] text-red-800">
                  Empowering Relief,
                </h2>
                <h2 className="text-[2rem] text-red-800">
                  One Chain at a Time!
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-center mr-20 relative top-[50px]">
            {PROJECT2.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl md:mx-auto sm:mx-20 border-[4px] border-gray-300 hover:shadow-2xl hover:shadow-gray-300 transition-shadow duration-300 ease-in-out"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  className={project.imageClassName}
                />
                <PiHurricaneDuotone className="absolute inset-0 m-auto z-10 text-[7rem] text-white opacity-100 transition-opacity duration-300 group-hover:opacity-0 flex items-center justify-center"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-300 hover:opacity-100">
                  <h3 className="2xl:text-2xl 2xl:mb-10 xl:text-md xl:mb-2 lg:text-lg lg:mb-6 md:text-[1.05rem] md:mb-4 sm:text-xl sm:mb-8 text-lg text-center font-light tracking-tight">
                    {project.name}
                  </h3>
                  <p className="p-4 2xl:text-[1.125rem] 2xl:mb-12 xl:text-sm xl:mb-4 lg:text-[1rem] lg:mb-8 md:text-[0.92rem] md:mb-6 sm:text-[1rem] sm:mb-10 text-sm mb-2 font-light tracking-tight">
                    {project.description}
                  </p>
                  <Link href = "/form" className={project.buttonClassName}>
                    <div className="z-10 flex items-center">
                      <span className="2xl:text-lg xl:text-sm lg:text-[1rem] md:text-sm sm:text-[1rem] text-sm font-light tracking-tight">
                        Relief Request
                      </span>
                      <MdArrowOutward />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Added Link Navigation Button */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <Link 
          href="/form" 
          className="px-8 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl flex items-center space-x-2"
        >
          <span>Start Relief Request</span>
          <MdArrowOutward className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;