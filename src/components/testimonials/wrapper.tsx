interface TestimonialCardProp {
  children: React.ReactNode;
  name: string;
  position: string;
}

const MessageWrapper = ({ children, name, position }: TestimonialCardProp) => {
  return (
    <div className="w-full max-w-[606px]">
      <div className="relative shrink-0 w-full max-w-[606px] py-8 sm:py-10 lg:py-12 px-6 sm:px-8 lg:px-13">
        <img
          src="/assets/Bubble.png"
          className="shrink-0 z-0 h-[200px] sm:h-[230px] lg:h-[266px] absolute inset-0 w-full max-w-[606px] object-cover"
          alt="bubble"
        />
        <div className="relative z-10000 text-white text-sm sm:text-base lg:text-lg leading-relaxed">
          {children}
        </div>
      </div>
      <div className="flex flex-col ml-4 sm:ml-8 lg:ml-20 mt-6 sm:mt-8 lg:mt-[48px] items-start">
        <p className="text-primary text-sm sm:text-base lg:text-lg font-semibold">{name}</p>
        <p className="text-white text-xs sm:text-sm lg:text-base">{position}</p>
      </div>
    </div>
  );
};

export default MessageWrapper;
