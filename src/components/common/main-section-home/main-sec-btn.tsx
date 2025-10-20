interface Props {
  label?: string;
  onClick?: () => void;
  className?: string;
}
const MainSecBtn = ({ label, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-dark w-fit  flex items-center justify-center border text-[20px] border-black px-[35px] py-4 rounded-[14px] leading-[28px] ${className}`}
    >
      {label || "Book a consultation"}
    </button>
  );
};

export default MainSecBtn;
