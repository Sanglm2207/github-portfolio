"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { ViewProject } from "./ViewProject";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { techColors } from "@/data/techColors";

export const Projects = () => {

    // Đếm số tech
    const techUsage = useMemo(() => {
        const countMap: Record<string, number> = {};
        projects.forEach((p) =>
            p.techs.forEach((t) => {
                countMap[t] = (countMap[t] || 0) + 1;
            })
        );

        return Object.entries(countMap)
            .sort(([, a], [, b]) => b - a)
            .map(([tech, count]) => ({ tech, count }));
    }, []);

    // ✅ Lấy tech phổ biến nhất
    const topTech = techUsage[0]?.tech || null;

    const [selectedTech, setSelectedTech] = useState<string | null>(topTech);


    const filteredProjects = selectedTech
        ? projects.filter((p) => p.techs.includes(selectedTech))
        : projects;


    return (
        <>
            <h2 className="text-xl font-bold mb-4">Featured Projects</h2>

            {/* Filter bar */}
            <div className="relative mb-6 overflow-x-auto scrollbar-hide">
                <div className="flex space-x-2 pb-2 pr-6">
                    {techUsage.map(({ tech, count }, index) => {
                        const isSelected = tech === selectedTech;
                        const showPlus = count >= 3;
                        const opacityClass = index >= techUsage.length - 3 ? "opacity-50" : "";

                        return (
                            <button
                                key={tech}
                                onClick={() =>
                                    isSelected ? setSelectedTech(null) : setSelectedTech(tech)
                                }
                                title={`Used in ${count} project${count > 1 ? "s" : ""}`}
                                className={cn(
                                    "whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                                    isSelected
                                        ? "bg-primary text-white shadow-sm ring-1 ring-primary"
                                        : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground",
                                    opacityClass
                                )}
                            >
                                {tech} {showPlus ? `(${count}+)` : ""}
                            </button>
                        );
                    })}
                </div>

                {/* Fade effect right */}
                <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {filteredProjects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    target="_blank"
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.short_desc}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {p.techs.map((tech) => (
                                            <span
                                                key={tech}
                                                className={cn(
                                                    "px-2 py-1 rounded-full text-xs font-medium",
                                                    techColors[tech] || "bg-gray-400 text-white"
                                                )}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <ViewProject
                                        title={p.title}
                                        description={p.description}
                                        result={p.result}
                                        startDate={p.startDate}
                                        endDate={p.endDate}
                                        productLink={p.link}
                                        techs={p.techs}
                                        images={p.images}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}