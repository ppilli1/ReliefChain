import { useRef } from "react";
import { MouseParallax } from "react-just-parallax";
import dollarImage from "../assets/dollar.png";
import poundImage from "../assets/pound.png";
import liraImage from "../assets/lira.png";
import rupeeImage from "../assets/rupee.png";
import yuanImage from "../assets/yuan.webp";
import euroImage from "../assets/euro.png";
import Image from "next/image";



// Define the props interface
interface BgCirclesProps {
  parallaxRef?: React.RefObject<HTMLDivElement>;
}

export const BgCircles: React.FC<BgCirclesProps> = ({ parallaxRef }) => {
  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 xl:-top-[32rem]">
      {/* Moving background colored circle balls */}
      <MouseParallax
        strength={0.07}
        parallaxContainerRef={parallaxRef}
        enableOnTouchDevice
      >
        <div className="absolute top-[60rem] left-[12.6rem]">
          <Image
            src={dollarImage}
            alt="Dollar Image"
            height={45}
            width={45}
            style={{
              transform: `rotate(0deg)`, // Adjust rotation value as needed
            }}
          />
        </div>
        <div className="absolute top-[60rem] right-[12.8rem]">
          <Image
            src={poundImage}
            alt="Pound Image"
            height={40}
            width={40}
            style={{
              transform: `rotate(0deg)`, // Adjust rotation value as needed
            }}
          />
        </div>
        <div className="absolute top-[41.5rem] left-[26rem]">
          <Image
            src={liraImage}
            alt="Lira Image"
            height={32}
            width={32}
            style={{
              transform: `rotate(0deg)`, // Adjust rotation value as needed
            }}
          />
        </div>
        <div className="absolute top-[50.5rem] right-[43rem]">
          <Image
            src={euroImage}
            alt="Euro Image"
            height={40}
            width={40}
            style={{
              transform: `rotate(0deg)`, // Adjust rotation value as needed
            }}
          />
        </div>
        <div className="absolute top-[50.10rem] right-[32.5rem]">
          <Image
            src={yuanImage}
            alt="Yuan Image"
            height={50}
            width={50}
            style={{
              transform: `rotate(0deg)`, // Adjust rotation value as needed
            }}
          />
        </div>
        <div className="absolute top-[41.6rem] right-[26rem]">
          <Image
            src={rupeeImage}
            alt="Rupee Image"
            height={27}
            width={27}
            style={{
              transform: `rotate(0deg)`, // Adjust rotation value as needed
            }}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
