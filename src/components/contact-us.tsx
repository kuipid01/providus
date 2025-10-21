/* eslint-disable @typescript-eslint/no-unused-vars */
import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useEffect } from "react";
import SectionHeader from "./common/section-header";
import ContactForm from "./contact/contact-form";

const ContactUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // map the section entering -> leaving the viewport
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 400]); // px
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 1, 0.9]);

  // Debugging helper (optional)
  useEffect(() => {
    const unsub1 = scrollYProgress.on(
      "change",
      (_v) =>
        // console.log("progress:", Number(v.toFixed(2)))
        null
    );
    return () => unsub1();
  }, [scrollYProgress]);

  return (
    <div className="overflow-hidden">
      <SectionHeader
        title="Contact Us"
        description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
      />

      <div
        ref={ref}
        className="min-h-[400px] sm:min-h-[600px] lg:h-[773px] relative bg-gray py-8 sm:py-12 lg:py-[62px] px-4 sm:px-6 lg:px-[100px] rounded-[45px] mt-12 sm:mt-16 lg:mt-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>

          <div className="hidden h-[600px]  w-full lg:w-1/2 lg:flex justify-center relative">
            {/* Note: removed the Tailwind translate class (lg:-translate-y-1/2) so Motion can control transform */}
            <motion.img
              style={{ y, opacity: opacity }}
              transition={{
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
              }}
              src="/assets/contact-us.png"
              className="h-[300px]  sm:h-[400px] translate-y-0 _top-0 lg:h-[648px] w-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[691px] object-cover lg:absolute _lg:top-1/2 lg:right-[-324px]"
              alt="contact-us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
