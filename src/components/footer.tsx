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
    <footer className="mt-[140px]">
      <div className="bg-[#191a23] px-[60px] py-[55px] rounded-t-[25px] text-white ">
        {/* Top Section - Navigation & Social */}
        <div>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#191a23] font-bold text-lg">X</span>
              </div>
              <span className="text-xl font-semibold">Positivus</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-[#b9ff66] transition-colors underline"
              >
                About us
              </a>
              <a
                href="#services"
                className="hover:text-[#b9ff66] transition-colors underline p"
              >
                Services
              </a>
              <a
                href="#cases"
                className="hover:text-[#b9ff66] transition-colors underline p"
              >
                Use Cases
              </a>
              <a
                href="#pricing"
                className="hover:text-[#b9ff66] transition-colors underline p"
              >
                Pricing
              </a>
              <a
                href="#blog"
                className="hover:text-[#b9ff66] transition-colors underline p"
              >
                Blog
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white text-black font-bold rounded-full flex items-center justify-center hover:bg-[#b9ff66] hover:text-[#191a23] transition-colors"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-black font-bold rounded-full flex items-center justify-center hover:bg-[#b9ff66] hover:text-[#191a23] transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-black font-bold rounded-full flex items-center justify-center hover:bg-[#b9ff66] hover:text-[#191a23] transition-colors"
              >
                <svg
                  className="w-4 h-4"
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
        <div className="py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className=" flex flex-col items-start">
              <h3 className="text-lg mb-5 font-semibold  bg-[#b9ff66] text-[#191a23] px-3 py-1 rounded-md inline-block">
                Contact us:
              </h3>
              <div className="space-y-5 flex flex-col items-start text-gray-300">
                <p className="p">Email: info@positivus.com</p>
                <p className="p">Phone : 555-567-8901</p>
                <p className="p">
                  <span className="font-bold">Address:</span> 1234 Main St
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col py-[59px] justify-center items-center bg-[#292A32] rounded-[14px] w-[634px] sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" px-[35px] w-[285px] py-[22px] bg-transparent border border-white rounded-[22px] text-white placeholder-white focus:outline-none focus:border-[#b9ff66] transition-colors placeholder:text-[16px]"
                  required
                />
                <button
                  type="submit"
                  className="px-[35px] py-[22px] bg-[#b9ff66] text-[#191a23] font-semibold rounded-[20px] hover:bg-[#a8e55c] transition-colors whitespace-nowrap"
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
