import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export const ToggleDesc = ({
  number,
  title,
  description,
  opened,
  onClick
}: {
  number: string;
  title: string;
  description: string;
  opened: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "rounded-[45px] bg-gray lg:px-[60px] px-6   lg:py-[40px] py-4",
        opened
          ? "bg-primary lg:px-[60px] px-6 lg:py-[40px] py-4"
          : "bg-gray lg:px-[60px] px-6 lg:py-[40px] py-4"
      )}
    >
      <div className=" flex  items-center  justify-between ">
        <div className="flex items-center gap-[25px]">
          <p className="lg:h1 h2 text-black">0{number}</p>
          <p className="lg:h2 h3 text-black">{title}</p>
        </div>

        <div
          onClick={onClick}
          className=" size-[58px] shrink-0 cursor-pointer flex items-center justify-center border border-dark rounded-full"
        >
          {opened ? (
            <Minus className="text-black" />
          ) : (
            <Plus className="text-black" />
          )}
        </div>
      </div>
      <AnimatePresence>
        {opened && (
          <motion.p
            key={description}
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            exit={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={clsx(
              "text-lg border-t text-left border-dark mt-[30px] pt-[30px] pb-[41px]",
              opened ? "text-black" : "text-gray"
            )}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
