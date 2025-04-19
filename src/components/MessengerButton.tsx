"use client";

import { FaFacebookMessenger } from "react-icons/fa";
import { Button } from "./ui/button";

export const MessengerButton = () => {
    const openMessenger = () => {
        window.open("https://m.me/kaidev99", "_blank");
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: "24px",
                right: "24px",
                zIndex: 9999,
            }}
        >
            <Button
                onClick={openMessenger}
                className="bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center p-4"
                style={{
                    backgroundColor: "#0084FF",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                <FaFacebookMessenger className="text-white" />
            </Button>
        </div>
    );
}