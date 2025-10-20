interface Props {
  label?: string;
  onClick?: () => void;
  className?: string;
}
const MainSecBtn = ({ label, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-dark w-fit flex items-center justify-center border text-sm sm:text-base lg:text-[20px] border-black px-4 sm:px-6 lg:px-[35px] py-2 sm:py-3 lg:py-4 rounded-[14px] leading-6 sm:leading-7 lg:leading-[28px] transition-colors hover:bg-gray-800 ${className}`}
    >
      {label || "Book a consultation"}
    </button>
  );
};

export default MainSecBtn;
