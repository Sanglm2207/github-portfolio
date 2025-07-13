import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Freelance Software Developer",
        company: "Freelance",
        logo: "/freelancer-1.svg",
        duration: "2022 - Present",
        description:
            "As a freelance software developer, I have worked on various projects across different industries. My role involved full-stack development, client collaboration, and delivering tailored software solutions for clients. I specialized in developing web applications and optimizing performance for better user experiences.",
        link: "https://kaidev99.com/",
        images: [
            "/freelance1.png",
            "/freelance2.png"
        ],
    },
    {
        role: "Software Developer", // TODO: Replace with actual role
        company: "FUNiX Online Education., JSC", // TODO: Replace with actual company name
        logo: "/funix.png", // TODO: Replace with actual logo
        duration: "2022 - 2024",
        description:
            "Lead developer for multiple high-impact projects, mentoring developers and students, implementing best practices.",
        link: "https://funix.edu.vn/",
        images: [
            "/funix1.png",
            "/funix2.png",
        ],
    },
    {
        role: "Junior Backend Developer", // TODO: Replace with actual role
        company: "ITSOL Technology Resources & Solutions., JSC", // TODO: Replace with actual company name
        logo: "/itsol.png", // TODO: Replace with actual logo
        duration: "2020 - 2022",
        description:
            "As a Java Developer at ITSOL, I developed Data ETL, REST, SOAP services, improved UI/UX, built frameworks like ZK and Spring, and provided onsite support at Viettel Cyber Security.",
        link: "https://itsol.vn/",
        images: [
            "/itsol1.png",
        ],
    },
    {
        role: "Fresher Java Developer", // TODO: Replace with actual role
        company: "Thuan Thanh Technology Solutions Co., Ltd", // TODO: Replace with actual company name
        logo: "/thuan-thanh-tech-logo.png", // TODO: Replace with actual logo
        duration: "2019 - 2020",
        description:
            "Assisted in the development of web applications, gained experience in agile methodologies and version control.",
        link: "https://startupventures.com",
        images: [],
    },
]

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2" />
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2">{j.description}</p>
                                {/* Job Images */}
                                <JobImages
                                    role={j.role}
                                    link={j.link}
                                    images={j.images}
                                    duration={j.duration}
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}