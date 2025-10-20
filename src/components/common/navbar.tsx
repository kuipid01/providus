import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <button className="text-black bg-white flex items-center justify-center border text-sm sm:text-base lg:text-[20px] border-black px-4 sm:px-6 lg:px-[35px] py-2 sm:py-3 lg:py-4 rounded-[14px] leading-[28px] whitespace-nowrap">
      Request Quote
    </button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between relative">
      {/* Logo */}
      <div>
        <img
          src="/assets/logo.svg"
          className="w-[150px] sm:w-[180px] lg:w-[219px] h-auto"
          alt="logo"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-6 xl:gap-10 justify-center">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-black leading-[28px] text-sm xl:text-[20px] hover:text-gray-600 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Request Quote Button */}
      <div className="hidden lg:block">
        <RequestQuoteButton />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg lg:hidden z-50">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-black hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-4 py-3">
              <RequestQuoteButton />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
