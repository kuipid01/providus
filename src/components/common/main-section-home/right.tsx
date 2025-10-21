import { motion } from "motion/react";

const Right = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="w-full lg:w-1/2 flex justify-center lg:justify-end"
    >
      <img
        src="/assets/Illustration.svg"
        className="w-full _lg:max-w-[400px] sm:_lg:max-w-[500px] lg:_lg:max-w-[600px] h-auto object-contain"
        alt="hero-image"
      />
    </motion.div>
  );
};

export default Right;
