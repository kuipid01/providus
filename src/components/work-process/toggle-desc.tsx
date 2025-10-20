import clsx from "clsx";
import { Minus, Plus } from "lucide-react";

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
    <div
      className={clsx(
        "rounded-[45px] bg-gray px-[60px]  py-[40px]",
        opened ? "bg-primary" : "bg-gray"
      )}
    >
      <div className=" flex  items-center  justify-between ">
        <div className="flex items-center gap-[25px]">
          <p className="h1 text-black">0{number}</p>
          <p className="h3 text-black">{title}</p>
        </div>

        <div
          onClick={onClick}
          className=" size-[58px] cursor-pointer flex items-center justify-center border border-dark rounded-full"
        >
          {opened ? (
            <Minus className="text-black" />
          ) : (
            <Plus className="text-black" />
          )}
        </div>
      </div>
      {opened && (
        <p
          className={clsx(
            "text-lg border-t text-left border-dark mt-[30px] pt-[30px] pb-[41px]",
            opened ? "text-black" : "text-gray"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
