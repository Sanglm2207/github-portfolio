"use client";

import {
    Dialog,
    DialogTitle,
    DialogHeader,
    DialogTrigger,
    DialogContent,
} from "@/components/ui/dialog";
import { ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import { techColors } from "./Projects";
import { cn } from "@/lib/utils";

interface ViewProjectProps {
    title: string;
    description: string;
    result?: string;
    startDate?: string;
    endDate?: string;
    productLink?: string;
    techs?: string[];
}

export const ViewProject = ({
    title,
    description,
    result,
    startDate,
    endDate,
    productLink,
    techs = [],
}: ViewProjectProps) => {
    return (
        <Dialog>
            <DialogTrigger className="flex gap-2 text-sm text-primary hover:underline">
                View Project
                <ExternalLink className="inline-block size-3" />
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold">
                        Project: {title}
                    </DialogTitle>
                </DialogHeader>

                {/* Time */}
                {(startDate || endDate) && (
                    <div className="flex items-center text-sm text-muted-foreground mt-1 mb-4 gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{startDate} - {endDate || "Present"}</span>
                    </div>
                )}

                {/* Description */}
                <div className="mt-4 space-y-6 text-sm">
                    <div>
                        <h4 className="text-md font-semibold mb-1 text-foreground">Description</h4>
                        <div
                            className="prose prose-sm max-w-none text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: description || "<p>Updating...</p>" }}
                        />
                    </div>

                    {/* Results */}
                    {result && (
                        <div>
                            <h4 className="text-md font-semibold mb-1 text-foreground">Results</h4>
                            <div
                                className="prose prose-sm max-w-none text-muted-foreground"
                                dangerouslySetInnerHTML={{ __html: result }}
                            />
                        </div>
                    )}

                    {/* Tech Stack */}
                    {techs.length > 0 && (
                        <div>
                            <h4 className="text-md font-semibold mb-1 text-foreground">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className={cn(
                                            "px-2 py-1 rounded-full text-xs font-medium",
                                            techColors[tech] || "bg-gray-500 text-white"
                                        )}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Link */}
                    {productLink && productLink !== "#" && (
                        <div>
                            <h4 className="text-md font-semibold mb-1 text-foreground">Link</h4>
                            <Link
                                href={productLink}
                                target="_blank"
                                className="text-primary underline text-sm"
                            >
                                {productLink}
                            </Link>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
