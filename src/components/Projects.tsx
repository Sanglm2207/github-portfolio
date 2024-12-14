import { cn } from "@/lib/utils";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Task Management Platform",
        description: "Taskcover is a unique, AI-enhanced project and task management to streamline workflows. Save time and optimize effectively with Taskcover one-stop shop.",
        tech: "NodeJs",
        link: "https://www.taskcover.com/en",
    },
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React, Java, and Mysql",
        tech: "Java",
        link: "#",
    },
    {
        title: "Personal Blog",
        description: "My personal blog where I share my thoughts on programming and technology.",
        tech: "NextJs",
        link: "https://blog.kaidev99.com",
    },
    {
        title: "Crypto Trace Real-Time",
        description: "A real-time cryptocurrency tracker with Nextjs 15 and Material UI",
        tech: "NextJs",
        link: "https://trace-code.kaidev99.com",
    },
]

const techColors = {
    "NextJs": "bg-blue-500",
    "React Native": "bg-green-500",
    "NodeJs": "bg-purple-500",
    "Java": "bg-yellow-500",
}

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
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
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