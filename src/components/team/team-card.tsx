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
    <div className="w-full min-w-0 sm:min-w-[300px] lg:min-w-[387px] bg-white border border-dark drop-shadow-[0px_5px_0px_#191A23] min-h-[331px] rounded-[40px] py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-[35px] flex flex-col gap-4 sm:gap-6 lg:gap-7">
      <div className="flex h-[80px] sm:h-[102px] justify-between items-center">
        <img
          className={clsx(
            "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[97px] lg:h-[97px] object-contain",
            customClassName
          )}
          src={image}
          alt="team"
        />
        <div className="flex flex-col items-start mt-auto gap-1 sm:gap-2 flex-1 mx-2 sm:mx-4">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-black">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-black">{title}</p>
        </div>
        <div className="text-sm sm:text-[17px] text-primary font-bold rounded-full bg-black flex size-[30px] sm:size-[38px] justify-center items-center">
          In
        </div>
      </div>

      <hr className="border-dark" />
      <div className="flex flex-col gap-2">
        <p className="p text-left text-black leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};
