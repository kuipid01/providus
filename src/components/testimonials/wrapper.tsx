interface TestimonialCardProp {
  children: React.ReactNode;
  name: string;
  position: string;
}

const MessageWrapper = ({ children, name, position }: TestimonialCardProp) => {
  return (
    <div>
      <div className=" relative shrink-0  w-[606px]  py-12 px-13 ">
        <img
          src="/assets/Bubble.png"
          className="shrink-0 z-0 h-[266px] absolute inset-0 w-[606px]"
          alt=" bubble"
        />
        <div className=" relative z-[10000]"> {children}</div>
      </div>
      <div className="flex flex-col ml-20 mt-[48px] items-start">
        <p className="text-primary  h4">{name}</p>
        <p className=" text-white p">{position}</p>
      </div>
    </div>
  );
};

export default MessageWrapper;
