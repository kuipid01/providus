const navItems = [
  {
    label: "About us",
    href: "#about-us"
  },
  {
    label: "Services",
    href: "#services"
  },
  {
    label: "Use Cases",
    href: "#use-cases"
  },
  {
    label: "Pricing",
    href: "#pricing"
  },
  {
    label: "Blog",
    href: "#blog"
  }
];

const RequestQuoteButton = () => {
  return (
    <button className=" text-black bg-white flex items-center justify-center border text-[20px] border-black px-[35px] py-4 rounded-[14px] leading-[28px]">
      Request Quote
    </button>
  );
};
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between">
      <div>
        <img
          src="/assets/logo.svg"
          className=" w-[219px] h-[56px]"
          alt="logo"
        />
      </div>
      <ul className="flex items-center gap-10 justify-center">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-black leading-[28px] text-[20px] "
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <RequestQuoteButton />
    </nav>
  );
};

export default Navbar;
