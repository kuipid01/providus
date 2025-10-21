import MainSecBtn from "./common/main-section-home/main-sec-btn";
import { motion } from "motion/react";
const MakeHappenSection = () => {
  return (
    <div className=" relative mt-[123px] mx-auto  h-[347px] bg-gray p-[60px] rounded-[45px]">
      <div className="flex flex-col  gap-[26px]">
        <span className="h3 text-black text-left">
          {" "}
          <motion.span
            initial={{ opacity: 0, x: -15, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {" "}
            Let’s{" "}
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: -15, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            make{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -15, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            things{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -15, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            happen
          </motion.span>
        </span>
        <motion.p
          initial={{ opacity: 0, x: -15, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p text-black max-w-[500px] text-left"
        >
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, x: -15, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <MainSecBtn label="Get your free proposal" />
        </motion.button>
      </div>

      <img
        src="/assets/happen.png"
        alt="make-happen"
        className="absolute hidden lg:block right-0 top-[-23px] bottom-[-23px] h-[394px] w-[494px] object-cover"
      />
    </div>
  );
};

export default MakeHappenSection;
