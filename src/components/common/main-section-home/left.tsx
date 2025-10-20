import MainSecBtn from "./main-sec-btn";

const Left = () => {
  return (
    <div className="flex w-full lg:max-w-[50%] flex-col gap-6 sm:gap-8 lg:gap-[35px] text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black max-w-full lg:max-w-[531px]">
        Navigating the digital landscape for success
      </h1>
      <p className="text-base sm:text-lg lg:text-[20px] max-w-full lg:max-w-[498px] leading-6 sm:leading-7 lg:leading-[30px] text-black">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation. We are a team of experienced digital marketing
        experts who are dedicated to helping businesses grow and succeed online.
      </p>
      <div className="flex justify-center lg:justify-start">
        <MainSecBtn />
      </div>
    </div>
  );
};

export default Left;
