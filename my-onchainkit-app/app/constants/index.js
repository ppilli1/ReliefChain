import md from "../assets/md.jpeg"
import or from "../assets/or.jpeg"
import bg1 from "../assets/bg-1.jpg"
import bg2 from "../assets/bg-2.jpg"
import bgfirst from "../assets/bgfirst.png";
import bgsecond from "../assets/bgsecond.jpg";

export const navigation = [
    {
      id: "0",
      title: "Medications/Diagnosis",
      url: "MD",
    },
    {
      id: "1",
      title: "Clinical Errors",
      url: "CE",
    },
  ];

  export const NAVIGATION_LINKS = [
    { label: "Medications/Diagnosis", href: "MD" },
    { label: "Clinical Errors", href: "CE" },
    { label: "Reports", href: "R"}
  ];

  export const NAVIGATION_LINK = [
    { label: "Patient Game", href: "PG"}
  ]

  export const PROJECT1 = [
    {
      id: 1,
      name: "Medications/Diagnosis",
      description:
        "An AI-generative tool that listens to doctor-patient conversations to review medications, give feedback for patient-condition diagnosis, and even asks the doctor some clarifying questions to confirm the symptoms and decisions made during the converstion.",
      image: bgfirst,
      imageClassName: "h-[600px] w-[400px] object-cover transition-transform duration-300 group-hover:scale-110 overflow-hidden hover:shadow-2xl",
      githubLink: "http://localhost:5175/#MD",
      buttonClassName: "relative flex items-center justify-center px-0 rounded-full 2xl:h-[60px] 2xl:w-[216px] xl:h-[40px] xl:w-[144px] lg:h-[50px] lg:w-[180px] md:h-[40px] md:w-[144px] sm:h-[50px] sm:w-[180px] xs:h-[45px] xs:w-[162px] h-[40px] w-[144px] bg-white border border-blue-400 text-blue-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-blue-400 hover:before:w-2/4 hover:before:bg-blue-400 hover:after:w-2/4 hover:after:bg-blue-400 overflow-hidden"
    },
  ]

  export const PROJECT2 = [
    {
      id: 2,
      name: "Clinical Errors",
      description:
        "An AI-generative tool that listens onto doctor-patient conversations live and asks questions to ensure that the symptoms that the patient is describing are accurate and that the diagnosis curated and medications prescribed by the doctor are sensible.",
      image: bgsecond,
      imageClassName: "h-[600px] w-[400px] object-cover transition-transform duration-300 group-hover:scale-110",
      githubLink: "http://localhost:5175/#OR",
      buttonClassName: "relative flex items-center justify-center px-0 rounded-full 2xl:h-[60px] 2xl:w-[216px] xl:h-[40px] xl:w-[144px] lg:h-[50px] lg:w-[180px] md:h-[40px] md:w-[144px] sm:h-[50px] sm:w-[180px] xs:h-[45px] xs:w-[162px] h-[40px] w-[144px] bg-white border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-blue-500 hover:before:w-2/4 hover:before:bg-blue-500 hover:after:w-2/4 hover:after:bg-blue-500 overflow-hidden",
    },
  ]