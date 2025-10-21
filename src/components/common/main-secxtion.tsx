import { motion } from "motion/react";
import Left from "./main-section-home/left";
import Right from "./main-section-home/right";

const MainSection = () => {
  return (
    <div className="relative mt-20 sm:mt-auto w-full">
      <div className="my-[40px] sm:my-[50px] lg:my-[70px] mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        <Left />
        <Right />
      </div>

      <div className="flex gap-4 overflow-hidden">
        <motion.img
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          src="/assets/Logotypes.svg"
          alt="logotypes"
          className="mix-blend-luminosity w-full h-auto object-contain shrink-0"
        />
        <motion.img
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          src="/assets/Logotypes.svg"
          alt="logotypes"
          className="mix-blend-luminosity w-full h-auto object-contain shrink-0"
        />
      </div>
    </div>
  );
};

export default MainSection;
