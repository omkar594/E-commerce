import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Section */}
          <div className="footer-section">
            <h2 className="text-lg font-bold mb-4">Company</h2>
            {["About", "Blog", "Press", "Jobs", "Investor", "Partners"].map((text) => (
              <p key={text} className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  {text}
                </a>
              </p>
            ))}
          </div>

          {/* Solutions Section */}
          <div className="footer-section">
            <h2 className="text-lg font-bold mb-4">Solutions</h2>
            {["Marketing", "Analytics", "Commerce", "Insights", "Support"].map((text) => (
              <p key={text} className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  {text}
                </a>
              </p>
            ))}
          </div>

          {/* Documentation Section */}
          <div className="footer-section">
            <h2 className="text-lg font-bold mb-4">Documentation</h2>
            {["Guides", "API Status"].map((text) => (
              <p key={text} className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  {text}
                </a>
              </p>
            ))}
          </div>

          {/* Legal Section */}
          <div className="footer-section">
            <h2 className="text-lg font-bold mb-4">Legal</h2>
            {["Claim", "Privacy", "Terms"].map((text) => (
              <p key={text} className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  {text}
                </a>
              </p>
            ))}
          </div>

          {/* Account Section */}
          <div className="footer-section">
            <h2 className="text-lg font-bold mb-4">Account</h2>
            {["Profile", "Personal", "Cart", "Delivery Status"].map((text) => (
              <p key={text} className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  {text}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
