import { cn } from "@/lib/utils";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Task Management Platform",
        description: "Taskcover is a unique, AI-enhanced project and task management to streamline workflows.",
        techs: ["NodeJs", "React", "Redis"],
        link: "https://www.taskcover.com/en",
    },
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React, Java, MySQL, and Kafka.",
        techs: ["Java", "Spring Boot", "MySQL", "Kafka", "Redis", "Oracle"],
        link: "#",
    },
    {
        title: "Personal Blog",
        description: "My personal blog where I share my thoughts on programming and technology.",
        techs: ["NextJs", "Oracle"],
        link: "https://blog.kaidev99.com",
    },
    {
        title: "Crypto Trace Real-Time",
        description: "A real-time cryptocurrency tracker with Next.js 15, Material UI, and Redis.",
        techs: ["NextJs", "Material UI", "Redis"],
        link: "https://trace-code.kaidev99.com",
    },
    {
        title: "Financial Analytics Platform",
        description: "A financial management system for businesses with real-time tracking and forecasting.",
        techs: ["NodeJs", "NestJS", "NextJs", "MySQL", "Redis", "Kafka"],
        link: "#",
    },
    {
        title: "Enterprise Management System",
        description: "A complete enterprise system built with Angular, Spring Boot, and Oracle.",
        techs: ["Angular", "Spring Boot", "Oracle"],
        link: "#",
    },
];

const techColors: Record<string, string> = {
    "NextJs": "bg-black text-white",
    "React": "bg-blue-500 text-white",
    "Angular": "bg-red-600 text-white",
    "NodeJs": "bg-green-600 text-white",
    "Java": "bg-yellow-600 text-black",
    "Spring Boot": "bg-green-500 text-white",
    "MySQL": "bg-blue-700 text-white",
    "Redis": "bg-red-500 text-white",
    "Kafka": "bg-black text-yellow-500",
    "Oracle": "bg-orange-600 text-white",
    "Material UI": "bg-indigo-500 text-white",
};

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
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
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    {/* <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div> */}
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {p.techs.map((tech) => (
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
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}