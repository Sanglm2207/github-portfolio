"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { ViewProject } from "./ViewProject";
import { useMemo, useState } from "react";

export const projects = [
    {
        title: "Task Management Platform",
        short_desc: "Taskcover is a unique, AI-enhanced project and task management to streamline workflows.",
        description: `
      <p>A real-time task and team management system designed to streamline agency workflows and improve productivity.</p>
      <ul class="list-disc list-inside">
        <li>Designed microservice architecture using <strong>Spring Boot</strong>, <strong>Redis</strong>, and <strong>MongoDB</strong>.</li>
        <li>Integrated <strong>WebSocket</strong> and async processing to support 1000+ concurrent users.</li>
        <li>Implemented concurrency optimization and task prioritization.</li>
      </ul>
    `,
        result: `
      <ul class="list-disc list-inside">
        <li>Reduced task processing time by <strong>30%</strong>.</li>
        <li>Achieved <strong>99.9%</strong> system uptime via Docker & CI/CD pipelines.</li>
      </ul>
    `,
        startDate: "May 2023",
        endDate: "Mar 2025",
        techs: ["NodeJs", "React"],
        link: "https://www.taskcover.com/",
    },
    {
        title: "E-commerce Platform",
        short_desc: "A full-stack e-commerce solution with React, Java, MySQL, and Kafka.",
        description: `
      <p>Built a scalable e-commerce system with admin dashboard, inventory tracking, and secure checkout.</p>
      <ul class="list-disc list-inside">
        <li>Implemented event-driven backend using <strong>Kafka</strong>.</li>
        <li>Integrated <strong>payment gateway</strong> and <strong>user role</strong> management.</li>
        <li>Provided REST APIs for mobile apps and frontend clients.</li>
      </ul>
    `,
        result: `
      <ul class="list-disc list-inside">
        <li>Processed 10,000+ orders/month reliably.</li>
        <li>Achieved 20% faster order processing through caching strategies.</li>
      </ul>
    `,
        startDate: "Jan 2024",
        endDate: "Jun 2024",
        techs: ["Java", "React"],
        link: "#",
    },
    {
        title: "Personal Blog",
        short_desc: "My personal blog where I share my thoughts on programming and technology.",
        description: `
      <p>A technical blog built using modern static site generation with markdown-based posts.</p>
      <ul class="list-disc list-inside">
        <li>Supports syntax highlighting, tag filtering, and full-text search.</li>
        <li>Deployed on Vercel with blazing-fast load time.</li>
      </ul>
    `,
        result: `
      <ul class="list-disc list-inside">
        <li>10K+ monthly readers and 50+ articles published.</li>
        <li>Highly optimized for SEO and Core Web Vitals.</li>
      </ul>
    `,
        startDate: "Jul 2023",
        endDate: "Present",
        techs: ["NextJs", "MongoDB"],
        link: "https://blog.kaidev99.com",
    },
    {
        title: "Crypto Trace Real-Time",
        short_desc: "A real-time cryptocurrency tracker with Next.js 15, Material UI, and Redis.",
        description: `
      <p>A dashboard to track crypto prices, changes, and charts in real-time.</p>
      <ul class="list-disc list-inside">
        <li>Built frontend with <strong>Next.js App Router</strong> and <strong>Material UI</strong>.</li>
        <li>Fetched and streamed data using <strong>Redis Pub/Sub</strong>.</li>
        <li>Mobile responsive with clean visual design.</li>
      </ul>
    `,
        result: `
      <ul class="list-disc list-inside">
        <li>Handled 100+ simultaneous users with real-time updates.</li>
        <li>Reduced external API calls by 50% via smart caching.</li>
      </ul>
    `,
        startDate: "Jan 2024",
        endDate: "Feb 2024",
        techs: ["NextJs", "Redis"],
        link: "https://trace-code.kaidev99.com",
    },
    {
        title: "Enterprise Management System",
        short_desc: "A complete enterprise system built with Angular, Spring Boot, and Oracle.",
        description: `
      <p>Internal system managing HR, finance, and reports across departments.</p>
      <ul class="list-disc list-inside">
        <li>Developed ETL jobs, financial reporting, and approval workflows.</li>
        <li>Collaborated with BA, QA teams to ensure delivery.</li>
      </ul>
    `,
        result: `
      <ul class="list-disc list-inside">
        <li>Improved report generation time by 40%.</li>
        <li>Reduced system errors with structured logging and monitoring.</li>
      </ul>
    `,
        startDate: "2021",
        endDate: "2022",
        techs: ["Spring Boot", "Angular"],
        link: "#",
    },
    {
        title: "Lifetek – Government Document Storage",
        short_desc: "A secure, cloud-based digital document management platform for government departments.",
        description: `
      <p>Handled sensitive digital documents with workflows like signature, versioning, and auto-deletion.</p>
      <ul class="list-disc list-inside">
        <li>Applied sharding + indexing for performance.</li>
        <li>Worked with large datasets (1M+ docs/month).</li>
      </ul>
    `,
        result: `
      <ul class="list-disc list-inside">
        <li>Query time reduced by 40% for large document retrieval.</li>
        <li>System passed multiple security audits for gov deployment.</li>
      </ul>
    `,
        startDate: "May 2023",
        endDate: "Mar 2025",
        techs: ["NodeJs", "React"],
        link: "https://lifetek.funix.edu.vn",
    },
    {
        title: "FUNiX LMS Platform",
        short_desc: "An e-learning platform serving 20K+ students with mentor interaction and assignment tracking.",
        description: `
      <p>Added features like mentor booking, assignment review, and real-time notifications.</p>
      <ul class="list-disc list-inside">
        <li>Optimized <strong>PL/SQL</strong> stored procedures and data access layers.</li>
        <li>Improved user experience and reduced loading times.</li>
      </ul>
    `,
        result: `
      <ul class="list-disc list-inside">
        <li>Served 20,000+ learners with 99% uptime.</li>
        <li>Boosted backend response time by 25%.</li>
      </ul>
    `,
        startDate: "2023",
        endDate: "2024",
        techs: ["Spring Boot", "PL/SQL"],
        link: "https://courses.funix.edu.vn",
    },
    {
        title: "Chat Discord GPT – AI Assistant",
        short_desc: "AI-powered Discord bot that provides real-time Q&A assistance for learners.",
        description: `
      <p>Integrated <strong>OpenAI GPT API</strong> into a Discord bot to answer student questions.</p>
      <ul class="list-disc list-inside">
        <li>Used <strong>Discord.js</strong> and Node.js backend.</li>
        <li>Stored chat history and allowed context-based queries.</li>
      </ul>
    `,
        result: `
      <ul class="list-disc list-inside">
        <li>Reduced manual support effort by 60%.</li>
        <li>Students reported increased satisfaction and faster answers.</li>
      </ul>
    `,
        startDate: "2024",
        endDate: "2024",
        techs: ["NodeJs", "OpenAI"],
        link: "#",
    },
];

export const techColors: Record<string, string> = {
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
    "React Native": "bg-blue-700 text-white",
    "Expo": "bg-yellow-500 text-black",
    "MongoDB": "bg-green-700 text-white",
    "Firebase": "bg-yellow-400 text-black",
    "MinIO": "bg-blue-800 text-white",
    "Cloudflare CDN": "bg-blue-400 text-white",
    "WebSocket": "bg-gray-600 text-white",
    "TypeScript": "bg-blue-600 text-white",
    "Python": "bg-blue-300 text-black",
    "SQL": "bg-purple-600 text-white",
    "Git": "bg-orange-500 text-white",
    "Docker": "bg-blue-400 text-white",
    "Kubernetes": "bg-blue-600 text-white",
    "Linux": "bg-gray-800 text-white",
    "Windows": "bg-blue-900 text-white",
    "MacOS": "bg-gray-300 text-black",
    "PostgreSQL": "bg-blue-800 text-white",

    "WebRTC": "bg-green-500 text-white",
    "GraphQL": "bg-purple-600 text-white",
    "Tailwind CSS": "bg-teal-500 text-white",
    "Bootstrap": "bg-purple-500 text-white",
    "Material Design": "bg-blue-500 text-white",
    "Sass": "bg-pink-500 text-white",
    "CSS": "bg-blue-300 text-black",
    "HTML": "bg-orange-300 text-black",
    "PHP": "bg-purple-700 text-white",
    "Ruby": "bg-red-700 text-white",
};

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
                                                    techColors[tech] || "bg-gray-500 text-white"
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