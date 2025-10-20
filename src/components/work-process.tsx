import { useState } from "react";
import SectionHeader from "./common/section-header";
import { ToggleDesc } from "./work-process/toggle-desc";

const WorkProcess = () => {
  const [process, setProcess] = useState([
    {
      number: "1",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      opened: false
    },
    {
      number: "2",
      title: "Strategy",
      description:
        "Based on the consultation, we will develop a customized digital marketing strategy tailored to your business needs. This will include a detailed plan outlining the specific actions we will take to achieve your goals.",
      opened: false
    },
    {
      number: "3",
      title: "Implementation",
      description:
        "Once the strategy is approved, we will begin implementing the plan. This will include the creation of content, the development of landing pages, the optimization of your website, and the management of your social media accounts.",
      opened: false
    },
    {
      number: "4",
      title: "Monitoring",
      description:
        "We will continuously monitor the performance of your campaigns and make adjustments as needed to ensure the best possible results. This will include the use of analytics to track key metrics and make data-driven decisions.",
      opened: false
    },
    {
      number: "5",
      title: "Optimization",
      description:
        "Based on the performance of your campaigns, we will make adjustments to the strategy to ensure the best possible results. This will include the optimization of your website, the creation of more content, and the management of your social media accounts.",
      opened: false
    },
    {
      number: "6",
      title: "Reporting",
      description:
        "We will provide you with regular reports on the performance of your campaigns and the results we are achieving. This will include detailed analytics and insights to help you understand the impact of our efforts.",
      opened: false
    }
  ]);

  const handleClick = (index: number) => {
    const newProcess = [...process];
    newProcess[index].opened = !newProcess[index].opened;
    setProcess(newProcess);
  };
  return (
    <div>
      <SectionHeader
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className=" mt-20 grid grid-cols-1 gap-[40px]">
        {process.map((item, index) => (
          <ToggleDesc
            onClick={() => handleClick(index)}
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
