import MainSecBtn from "./main-sec-btn";

const Left = () => {
  return (
    <div className=" flex  max-w-[50%] flex-col gap-[35px]">
      <h1 className="h1 text-black max-w-[531px] text-left">
        Navigating the digital landscape for success
      </h1>
      <p className="text-[20px] max-w-[498px] text-left leading-[30px] text-black">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation. We are a team of experienced digital marketing
        experts who are dedicated to helping businesses grow and succeed online.
      </p>
      <MainSecBtn />
    </div>
  );
};

export default Left;
