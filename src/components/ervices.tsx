import SectionHeader from "./common/section-header";
import ServiceCard from "./common/services/card";

const Services = () => {
  return (
    <div>
      <SectionHeader
        title="Our Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className=" grid mt-20 grid-cols-2 gap-[40px]">
        <ServiceCard
          image="/assets/service-1.png"
          variant="gray"
          firstTitle="Search engine"
          secondTitle="optimization"
        />
        <ServiceCard
          image="/assets/service-2.png"
          variant="primary"
          firstTitle="Pay-per-click"
          secondTitle="advertising"
        />
        <ServiceCard
          image="/assets/service-3.png"
          variant="dark"
          firstTitle="Social Media"
          secondTitle="marketing"
        />
        <ServiceCard
          image="/assets/service-4.png"
          variant="gray"
          firstTitle="Email"
          secondTitle="marketing"
          customClassName="h-[192px] "
        />
        <ServiceCard
          image="/assets/service-5.png"
          variant="primary"
          firstTitle="Content"
          secondTitle="creation"
          customClassName="h-[195px] w-[210px]"
        />
        <ServiceCard
          image="/assets/service-6.png"
          variant="dark"
          firstTitle="Analytics and "
          secondTitle="Tracking"
        />
      </div>
    </div>
  );
};

export default Services;
