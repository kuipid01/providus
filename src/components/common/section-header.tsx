import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row mt-12 sm:mt-16 lg:mt-[140px] items-start lg:items-center gap-6 lg:gap-10 text-left"
    >
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black px-2 bg-primary rounded-md"
      >
        {title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-sm sm:text-base lg:text-lg max-w-full lg:max-w-[580px] text-black text-left leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
