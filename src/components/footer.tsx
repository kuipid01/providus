import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="mt-12 sm:mt-16 lg:mt-[140px]">
      <div className="bg-[#191a23] px-4 sm:px-6 lg:px-[60px] py-6 sm:py-8 lg:py-[55px] rounded-t-[25px] text-white">
        {/* Top Section - Navigation & Social */}
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#191a23] font-bold text-sm sm:text-lg">
                  X
                </span>
              </div>
              <span className="text-lg sm:text-xl font-semibold">
                Positivus
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              <a
                href="#about"
                className="hover:text-[#b9ff66] transition-colors underline text-sm lg:text-base"
              >
                About us
              </a>
              <a
                href="#services"
                className="hover:text-[#b9ff66] transition-colors underline text-sm lg:text-base"
              >
                Services
              </a>
              <a
                href="#cases"
                className="hover:text-[#b9ff66] transition-colors underline text-sm lg:text-base"
              >
                Use Cases
              </a>
              <a
                href="#pricing"
                className="hover:text-[#b9ff66] transition-colors underline text-sm lg:text-base"
              >
                Pricing
              </a>
              <a
                href="#blog"
                className="hover:text-[#b9ff66] transition-colors underline text-sm lg:text-base"
              >
                Blog
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black font-bold rounded-full flex items-center justify-center hover:bg-[#b9ff66] hover:text-[#191a23] transition-colors"
              >
                <span className="text-xs sm:text-sm font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black font-bold rounded-full flex items-center justify-center hover:bg-[#b9ff66] hover:text-[#191a23] transition-colors"
              >
                <span className="text-xs sm:text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black font-bold rounded-full flex items-center justify-center hover:bg-[#b9ff66] hover:text-[#191a23] transition-colors"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Contact & Newsletter */}
        <div className="py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Information */}
            <div className="flex flex-col items-start">
              <h3 className="text-base sm:text-lg mb-3 sm:mb-5 font-semibold bg-[#b9ff66] text-[#191a23] px-2 sm:px-3 py-1 rounded-md inline-block">
                Contact us:
              </h3>
              <div className="space-y-3 sm:space-y-5 flex flex-col items-start text-gray-300">
                <p className="text-sm sm:text-base">
                  Email: info@positivus.com
                </p>
                <p className="text-sm sm:text-base">Phone : 555-567-8901</p>
                <p className="text-sm sm:text-base">
                  <span className="font-bold">Address:</span> 1234 Main St
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex justify-center lg:justify-end">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col py-6 sm:py-8 lg:py-[59px] justify-center items-center bg-[#292A32] rounded-[14px] w-full max-w-[634px] sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 sm:px-6 lg:px-[35px] w-full sm:w-[285px] py-3 sm:py-4 lg:py-[22px] bg-transparent border border-white rounded-[22px] text-white placeholder-white focus:outline-none focus:border-[#b9ff66] transition-colors placeholder:text-sm sm:placeholder:text-[16px]"
                  required
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 lg:px-[35px] py-3 sm:py-4 lg:py-[22px] bg-[#b9ff66] text-[#191a23] font-semibold rounded-[20px] hover:bg-[#a8e55c] transition-colors whitespace-nowrap text-sm sm:text-base"
                >
                  Subscribe to news
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="py-6 border-t border-white">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-white text-sm">
              © 2023 Positivus. All Rights Reserved.
            </p>
            <a
              href="#"
              className="text-white hover:text-[#b9ff66] transition-colors underline text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
