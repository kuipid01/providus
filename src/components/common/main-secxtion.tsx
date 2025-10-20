import Left from "./main-section-home/left";
import Right from "./main-section-home/right";

const MainSection = () => {
  return (
    <div className=" relative  w-full ">
      <div className=" my-[70px] mx-auto relative flex items-center justify-between">
        <Left />
        <Right />
      </div>
      <img
        src="/assets/Logotypes.svg"
        alt="logotypes"
        className=" mix-blend-luminosity w-[100%] h-[100%]"
      />
    </div>
  );
};

export default MainSection;
