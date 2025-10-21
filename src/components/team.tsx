import MainSecBtn from "./common/main-section-home/main-sec-btn";
import SectionHeader from "./common/section-header";
import { TeamCard } from "./team/team-card";
import { motion } from "motion/react";

const Team = () => {
  return (
    <div>
      <SectionHeader
        title="Our Team"
        description="Meet the team of experts who are dedicated to helping your business grow and succeed online."
      />
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid mt-12 sm:mt-16 lg:mt-20 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
      >
        <TeamCard
          name="John Doe"
          title="Marketing Manager"
          image="/assets/team-1.png"
          desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy."
        />
        <TeamCard
          name="Jane Doe"
          title="SEO Specialist"
          image="/assets/team-2.png"
          desc="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        />
        <TeamCard
          name="Jim Doe"
          title="Content Writer"
          image="/assets/team-3.png"
          desc="2+ years of experience in writing and editing , Skilled in creating compelling, SEO-optimized content for various industries"
        />
        <TeamCard
          name="John Doe"
          title="Social Media Manager"
          image="/assets/team-4.png"
          desc="A social media manager is a professional who manages the social media accounts of a business or organization."
        />
        <TeamCard
          name="Jane Doe"
          title="Graphic Designer"
          image="/assets/team-5.png"
          desc="A graphic designer is a professional who creates visual content for advertising, marketing, and other promotional materials."
        />
        <TeamCard
          name="Jim Doe"
          title="Copywriter"
          image="/assets/team-6.png"
          desc="A copywriter is a professional who writes copy for advertising, marketing, and other promotional materials."
        />
      </motion.div>
      <div className="flex justify-center sm:justify-end mt-8 sm:mt-10 items-end">
        <MainSecBtn label="See all team" />
      </div>
    </div>
  );
};

export default Team;
