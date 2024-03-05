import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="https://files.catbox.moe/jcbr6v.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin mt-[10px] mb-[10px]"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
          Computer Parts Assistants
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="https://cloud.google.com/dialogflow?hl=en" className="cursor-pointer">
              Dialogflow
            </a>
            <a href="https://lin.ee/XTIPB6o" className="cursor-pointer">
              LINE
            </a>
            <a href="https://www.facebook.com/profile.php?id=61556624655730" className="cursor-pointer">
              Facebook
            </a>
          </div>
        </div>

        <span className="font-bold ml-[10px] hidden md:block text-gray-300">
          Powered by Dialogflow ES
        </span>
      </div>
    </div>
  );
};

export default Navbar;
