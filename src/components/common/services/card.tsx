import clsx from "clsx";
import { ArrowRightIcon } from "lucide-react";

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
    <div
      className={clsx(
        " flex items-center border border-dark  drop-shadow-[0px_5px_0px_#191A23] text-black h-[310px] justify-between px-[57px] py-[50px]  rounded-[45px]",
        variant === "dark"
          ? "bg-dark"
          : variant === "gray"
          ? "bg-gray"
          : "bg-primary"
      )}
    >
      <div className=" flex flex-col  gap-[93px]">
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

        <div className=" flex items-center gap-[15px]">
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
              "text-[20px] ",
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

      <div className=" flex items-center justify-center">
        <img
          src={image}
          alt="service"
          className={clsx(
            " object-contain h-[210px] w-[166px]",
            customClassName
          )}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
