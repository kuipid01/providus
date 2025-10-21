import clsx from "clsx";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";

interface Props {
  image: string;
  variant: "dark" | "gray" | "primary";
  firstTitle: string;
  secondTitle: string;
  customClassName?: string;
}
const ServiceCard = ({
  image,
  variant,
  firstTitle,
  secondTitle,
  customClassName
}: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "flex flex-col  lg:flex-row items-center border border-dark drop-shadow-[0px_5px_0px_#191A23] text-black _min-h-[250px] min-h-fit h-[310px] justify-between px-4 sm:px-8 lg:px-[57px] py-6 sm:py-8 lg:py-[50px] rounded-[45px]",
        variant === "dark"
          ? "bg-dark"
          : variant === "gray"
          ? "bg-gray"
          : "bg-primary"
      )}
    >
      <div className="flex flex-col  gap-6 sm:gap-12 lg:gap-[93px] w-full sm:w-auto">
        <div>
          <p
            className={clsx(
              " px-2 text-black h3 rounded-[7px] flex flex-col items-start",
              variant === "dark"
                ? "bg-gray"
                : variant === "gray"
                ? "bg-primary text-black"
                : variant === "primary"
                ? "bg-gray"
                : "bg-primary"
            )}
          >
            {firstTitle}
          </p>
          <p
            className={clsx(
              " px-2 text-black h3 rounded-[7px] flex flex-col items-start",
              variant === "dark"
                ? "bg-gray"
                : variant === "gray"
                ? "bg-primary text-black"
                : variant === "primary"
                ? "bg-gray"
                : "bg-primary"
            )}
          >
            {secondTitle}
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-[15px]">
          <div
            className={clsx(
              " rounded-full  w-[41px] h-[41px] flex items-center justify-center ",
              variant === "dark"
                ? "bg-gray"
                : variant === "gray"
                ? "bg-dark"
                : "bg-dark"
            )}
          >
            <ArrowRightIcon
              className={clsx(
                " text-primary",
                variant === "dark"
                  ? "text-black"
                  : variant === "gray"
                  ? "text-primary"
                  : "text-white"
              )}
            />
          </div>

          <span
            className={clsx(
              "text-sm sm:text-base lg:text-[20px]",
              variant === "dark"
                ? "text-gray"
                : variant === "gray"
                ? "text-black"
                : variant === "primary"
                ? "text-black"
                : "text-white"
            )}
          >
            Learn More
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center  w-full sm:w-auto">
        <img
          src={image}
          alt="service"
          className={clsx(
            "object-contain h-[150px] w-[120px] sm:h-[180px] sm:w-[140px] lg:h-[210px] lg:w-[166px]",
            customClassName
          )}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
