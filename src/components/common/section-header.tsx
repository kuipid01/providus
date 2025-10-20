interface Props {
  title: string;
  description: string;
}
const SectionHeader = ({ title, description }: Props) => {
  return (
    <div className=" flex mt-[140px] items-center gap-10 text-left">
      <p className="h2  text-black px-2 bg-primary">{title}</p>
      <p className="p max-w-[580px] text-black text-left">{description}</p>
    </div>
  );
};

export default SectionHeader;
