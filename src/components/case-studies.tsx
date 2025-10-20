import { ArrowRightIcon } from "lucide-react";
import SectionHeader from "./common/section-header";

const Seperator = () => {
  return <div className="w-[1px] h-full max-h-[186px] bg-white"></div>;
};
const CaseStudies = () => {
  return (
    <div>
      <SectionHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className=" w-full overflow-clip  relative flex items-center justify-between mt-[123px] mx-auto  h-[347px] bg-dark p-[60px] rounded-[45px]">
        <div className=" w-full shrink-0  lg:shrink-none lg:w-auto  flex flex-col  gap-5">
          <p className="p text-white  max-w-[286px] text-left">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex items-center  gap-[15px] text-primary text-left">
            {" "}
            Learn more{" "}
            <span>
              <ArrowRightIcon className="text-primary" />
            </span>
          </div>
        </div>
        <Seperator />
        <div className=" w-full shrink-0 lg:shrink-none lg:w-auto  flex flex-col  gap-5">
          <p className="p text-white  max-w-[286px] text-left">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="flex items-center  gap-[15px] text-primary text-left">
            {" "}
            Learn more{" "}
            <span>
              <ArrowRightIcon className="text-primary" />
            </span>
          </div>
        </div>
        <Seperator />
        <div className=" w-full shrink-0 lg:shrink-none lg:w-auto  flex flex-col  gap-5">
          <p className="p text-white  max-w-[286px] text-left">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="flex items-center  gap-[15px] text-primary text-left">
            {" "}
            Learn more{" "}
            <span>
              <ArrowRightIcon className="text-primary" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
