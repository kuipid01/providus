import MainSecBtn from "./main-sec-btn";
import { motion } from "motion/react";

const Left = () => {
  return (
    <div className="flex  w-full lg:max-w-[50%] flex-col gap-6 sm:gap-8 lg:gap-[35px] text-center lg:text-left">
      <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-black max-w-full lg:max-w-[531px]">
        <motion.span
          initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Navigating
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          the digital landscape for success
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-base sm:text-lg lg:text-[20px] max-w-full _lg:max-w-[498px] leading-6 sm:leading-7 lg:leading-[30px] text-black"
      >
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation. We are a team of experienced digital marketing
        experts who are dedicated to helping businesses grow and succeed online.
      </motion.p>
      <motion.div className="flex justify-center lg:justify-start">
        <motion.button
          initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <MainSecBtn />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Left;
