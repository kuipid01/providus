import MainSecBtn from "./common/main-section-home/main-sec-btn";

const MakeHappenSection = () => {
  return (
    <div className=" relative mt-[123px] mx-auto  h-[347px] bg-gray p-[60px] rounded-[45px]">
      <div className="flex flex-col  gap-[26px]">
        <h3 className="h3 text-black text-left"> Let’s make things happen</h3>
        <p className="p text-black max-w-[500px] text-left">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <MainSecBtn label="Get your free proposal" />
      </div>

      <img
        src="/assets/happen.png"
        alt="make-happen"
        className="absolute hidden lg:block right-0 top-[-23px] bottom-[-23px] h-[394px] w-[494px] object-cover"
      />
    </div>
  );
};

export default MakeHappenSection;
