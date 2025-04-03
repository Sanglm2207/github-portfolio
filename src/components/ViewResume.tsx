"use client";

import {
    Dialog,
    DialogTitle,
    DialogHeader,
    DialogTrigger,
    DialogContent,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ViewResumeProps {
    role: string; // Tên file PDF
}

export const ViewResume = ({ role }: ViewResumeProps) => {
    const fileUrl = `/${role}.pdf#toolbar=0`; // Đường dẫn đến file PDF

    // Hàm để tải file về khi người dùng nhấp vào liên kết
    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault(); // Ngừng hành động mặc định của thẻ <Link>
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = role; // Tên file khi tải về
        link.click(); // Kích hoạt sự kiện tải file
    };

    return (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2 w-full">
            <Dialog>
                <DialogTrigger className="bg-black text-white px-4 py-2 rounded-md font-semibold w-full text-center text-sm">
                    RESUME WORK
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>
                            Curriculum Vitae: {role}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 flex flex-col items-center w-full">
                        <iframe
                            src={fileUrl}
                            className="w-full h-full"
                            style={{
                                border: "none",
                                display: "block",
                                width: "100%",
                                height: "80vh", // Điều chỉnh chiều cao để tránh cuộn dọc
                            }}
                        />
                    </div>
                    <Link href={fileUrl} onClick={handleDownload} className="text-sm flex items-center justify-center text-blue-600 hover:underline mt-2">
                        Download now
                        <ExternalLink className="size-4 ml-2" />
                    </Link>
                </DialogContent>
            </Dialog>
        </div>
    );
};
