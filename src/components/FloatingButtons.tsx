"use client";

import { FaFacebookMessenger } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function FloatingButtons() {
    const [showPopup, setShowPopup] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowPopup(true);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);

    const openMessenger = () => {
        window.open("https://m.me/kaidev99", "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
            {/* Messenger popup */}
            {showPopup && (
                <div className="relative w-full flex justify-center mb-2">
                    <div className="bg-white text-black px-4 py-3 rounded-lg shadow-xl relative max-w-[260px] animate-fade-in">
                        <button
                            className="absolute top-1 right-1 text-gray-500 hover:text-black"
                            onClick={() => setShowPopup(false)}
                        >
                            ×
                        </button>
                        👋 Xin chào! Bạn cần hỗ trợ gì không?
                    </div>
                </div>
            )}

            {/* Messenger button */}
            <button
                onClick={openMessenger}
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-colors duration-300 animate-shake"
                style={{
                    background: "#0084FF",
                    color: "white",
                }}
            >
                <FaFacebookMessenger size={28} />
            </button>

            {/* Phone button */}
            <div
                onMouseEnter={() => setHovered('phone')}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col items-center"
            >
                {hovered === 'phone' && (
                    <div className="bg-black text-white text-sm px-3 py-1 rounded shadow-md animate-fade-in mb-2">
                        Gọi cho tôi
                    </div>
                )}
                <a
                    href="tel:+84762121242"
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg cursor-pointer animate-shake transition-all duration-300"
                    style={{
                        background: "#34C759",
                        color: "white",
                    }}
                >
                    <BsTelephoneFill size={26} />
                </a>
            </div>
            {/* Blog button */}
            <Link href="https://blog.kaidev99.com" target="_blank">
                <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg flex items-center justify-center cursor-pointer animate-shake">
                    <BookOpen color="#fff" size={28} />
                </div>
            </Link>

            {/* Keyframes */}
            <style jsx>{`
        @keyframes shake {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(3deg); }
          20% { transform: rotate(-3deg); }
          30% { transform: rotate(3deg); }
          40% { transform: rotate(-3deg); }
          50% { transform: rotate(1deg); }
          60% { transform: rotate(-1deg); }
          70% { transform: rotate(1deg); }
          80%, 100% { transform: rotate(0deg); }
        }

        .animate-shake {
          animation: shake 2s infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
