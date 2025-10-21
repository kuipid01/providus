import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <nav className="flex z-3000 px-4 sm:px-6 lg:py-auto  py-[20px] fixed sm:relative top-0 left-0 w-full bg-white/50 backdrop-blur-lg sm:w-auto items-center justify-between ">
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
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />
      )}

      {/* Mobile Menu */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: 5, filter: "blur(6px)" }}
            exit={{ opacity: 0, y: 5, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out"
          >
            <motion.div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <img
                  src="/assets/logo.svg"
                  className="w-[150px] h-auto"
                  alt="logo"
                />
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-black hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <motion.ul
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
                className="flex-1 py-6"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                      show: { opacity: 1, y: 0, filter: "blur(0px)" }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <a
                      href={item.href}
                      className="block px-6 py-4 text-lg text-black hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Mobile Menu Footer */}
              <motion.div className="p-6 border-t border-gray-200">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <RequestQuoteButton />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
