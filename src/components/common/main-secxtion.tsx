import Left from "./main-section-home/left";
import Right from "./main-section-home/right";

const MainSection = () => {
  return (
    <div className="relative w-full">
      <div className="my-[40px] sm:my-[50px] lg:my-[70px] mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        <Left />
        <Right />
      </div>
      <img
        src="/assets/Logotypes.svg"
        alt="logotypes"
        className="mix-blend-luminosity w-full h-auto object-contain"
      />
    </div>
  );
};

export default MainSection;
