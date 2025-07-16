"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BlogFloatingButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-[90px] right-6 z-[9998] flex flex-col items-center gap-2"
    >
      {/* Tooltip */}
      {hovered && (
        <div className="bg-black text-white text-sm px-3 py-1 rounded shadow-md animate-fade-in">
          Đọc bài viết tại Blog
        </div>
      )}

      {/* Floating Blog Button */}
      <Link href="https://blog.kaidev99.com" target="_blank">
        <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg flex items-center justify-center cursor-pointer animate-shake">
          <BookOpen color="#fff" size={28} />
        </div>
      </Link>

      {/* Animations */}
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
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
