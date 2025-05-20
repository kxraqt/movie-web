"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Film, Mail, Phone } from "lucide-react";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  const getBgColor = (isDarkMode: boolean) => {
    return isDarkMode ? "bg-gray-900" : "bg-white";
  };
  const bgColor = "#4338CA";
  const textColor = isDarkMode ? "text-white" : "text-white";
  const secondaryTextColor = isDarkMode ? "text-white" : "text-white";
  const linkTextColor = "text-white";

  return (
    <footer className={`${bgColor} w-screen screen`}>
      <div className="flex flex-col md:flex-row justify-between max-w-screen container mx-auto px-6 pb-10 pt-10  bg-[#4338CA]">
        <div className="mb-4 md:mb-0 flex flex-col pl-10 ">
          <div className="flex">
            <Film className={`w-6 h-6 ${textColor} mr-2`} />
            <p className={`font-bold text-lg ${textColor}`}>Movie Z</p>
          </div>

          <div className={`text-sm ${secondaryTextColor} mb-4 md:mb-0`}>
            © 2024 Movie Z. All Rights Reserved.
          </div>
        </div>

        <div
          className={`mb-4 md:mb-0 text-sm ${secondaryTextColor} whitespace-nowrap`}
        >
          <h4 className={`font-semibold mb-2 ${textColor}`}>
            Contact Information
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <Mail className={`w-4 h-4 ${textColor} mr-2`} />
              <span className="mr-1">Email:</span>
            </div>
            <div style={{ paddingLeft: "24px" }}> support@moviez.com</div>
            <div className="flex items-center mt-2">
              <Phone className={`w-4 h-4 ${textColor} mr-2`} />
              <span className="mr-1">Phone:</span>
            </div>
            <div style={{ paddingLeft: "24px" }}> +976 (11) 123-4567</div>
          </div>
        </div>

        <div
          className={`text-sm pr-10 ${secondaryTextColor} whitespace-nowrap`}
        >
          <h4 className={`font-semibold mb-2 ${textColor}`}>Follow us</h4>
          <div className="flex space-x-6">
            <a href="#" className={linkTextColor}>
              Facebook
            </a>
            <a href="#" className={linkTextColor}>
              Instagram
            </a>
            <a href="#" className={linkTextColor}>
              Twitter
            </a>
            <a href="#" className={linkTextColor}>
              Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
