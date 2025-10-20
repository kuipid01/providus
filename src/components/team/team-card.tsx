import clsx from "clsx";

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
  customClassName?: string;
  desc: string;
}

export const TeamCard = ({
  name,
  title,
  image,
  desc,
  customClassName
}: TeamCardProps) => {
  return (
    <div className="min-w-[387px] bg-white border-[1px] border-dark  drop-shadow-[0px_5px_0px_#191A23] h-[331px rounded-[40px] py-10 px-[35px] _drop-shadow-[0px_5px_0px_#191A23] flex flex-col gap-7">
      <div className="flex h-[102px]  justify-between">
        <img
          className={clsx("w-[97px] h-[97px] object-contain", customClassName)}
          src={image}
          alt="team"
        />
        <div className="flex flex-col items-start mt-auto gap-2">
          <h3 className="h4 text-black">{name}</h3>
          <p className="p text-black">{title}</p>
        </div>
        <div className=" text-[17px] text-primary font-bold  rounded-full bg-black flex size-[38px] justify-center items-center">
          In
        </div>
      </div>

      <hr className="border-dark" />
      <div className="flex flex-col gap-2">
        <p className="p text-left text-black">{desc}</p>
      </div>
    </div>
  );
};
