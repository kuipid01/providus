interface Props {
  title: string;
  description: string;
}
const SectionHeader = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row mt-12 sm:mt-16 lg:mt-[140px] items-start lg:items-center gap-6 lg:gap-10 text-left">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black px-2 bg-primary rounded-md">{title}</p>
      <p className="text-sm sm:text-base lg:text-lg max-w-full lg:max-w-[580px] text-black text-left leading-relaxed">{description}</p>
    </div>
  );
};

export default SectionHeader;
