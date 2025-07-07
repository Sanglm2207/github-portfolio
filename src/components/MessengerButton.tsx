"use client";

import { FaFacebookMessenger } from "react-icons/fa";
import { Button, type ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

const openMessenger = () => {
  window.open("https://m.me/kaidev99", "_blank");
};

export const MessengerButton = (props: ButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <Button
        onClick={openMessenger}
        className={cn(
          "rounded-full w-[60px] h-[60px] p-0 shadow-lg transition-colors duration-300 ease-in-out",
          "bg-[#0084FF] hover:bg-[#0073E0] text-white"
        )}
        {...props}
      >
        <FaFacebookMessenger size={28} />
      </Button>
    </div>
  );
};