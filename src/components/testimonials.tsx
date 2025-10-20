import SectionHeader from "./common/section-header";
import MessageWrapper from "./testimonials/wrapper";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const getTypeOfStar = (index: number) => {
  if (index === 0) {
    return <img src="/assets/star.png" alt="testimonial" />;
  } else {
    return <img src="/assets/star-white.png" alt="testimonial" />;
  }
};

const Testimonials = () => {
  return (
    <div className=" mt-[100px]">
      <SectionHeader
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className=" mt-20  w-full  h-[625px]  rounded-[45px] bg-dark flex flex-col">
        <div className="mt-[84px]" />

        <div className=" flex px-5 lg:px-0 justify-center overflow-x-clip gap-[50px] w-full items-center">
          <MessageWrapper
            children={
              <p>
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            }
            name="John Smith"
            position="Marketing Director at XYZ Corp"
          />
          <MessageWrapper
            children={
              <p>
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            }
            name="John Smith"
            position="Marketing Director at XYZ Corp"
          />
          <MessageWrapper
            children={
              <p>
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            }
            name="John Smith"
            position="Marketing Director at XYZ Corp"
          />
        </div>

        <div className="w-full px-10 lg:w-[564px] mx-auto mt-[124px] flex justify-between  items-center   h-10">
          <ArrowLeftIcon
            className="w-[20px] h-[20px]"
            onClick={() => {
              console.log("left");
            }}
          />
          <div className="flex items-center justify-center gap-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="w-[20px] h-[20px] ml-5 flex items-center justify-center"
              >
                {getTypeOfStar(index)}
              </div>
            ))}
          </div>
          <ArrowRightIcon
            className="w-[20px] h-[20px]"
            onClick={() => {
              console.log("right");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
