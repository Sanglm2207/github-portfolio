import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent
} from "@/components/ui/card";
const socials = [
    {
        name: "Github",
        link: "https://github.com/sanglm2207",
        icon: <FaGithub className="size-4" />
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/in/kaidev99",
        icon: <FaLinkedin className="size-4" />
    },
    {
        name: "X (Twitter)",
        link: "https://x.com/kaidev99",
        icon: <FaXTwitter className="size-4" />
    },
    {
        name: "Facebook",
        link: "https://facebook.com/kaidev99",
        icon: <FaFacebook className="size-4" />
    }
    // TODO: Add more socials here
]

export const Profile = () => {
    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
                        <Image
                            width={150}
                            height={150}
                            quality={100}
                            src="/sanglm1.png"
                            alt="Profile Picture"
                            className="rounded-full size-12 md:w-full h-auto object-cover border-2"
                        />
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="font-bold md:mt-4 text-xl md:text-2xl">Lại Minh Sáng</h1>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Full-stack Developer
                            </p>
                        </div>
                    </div>
                    <p className="mt-2 text-start text-sm text-muted-foreground">
                        I am a software developer with a passion for building products that solve real-world problems.
                    </p>
                    <Button className="mt-4 w-full" asChild>
                        {/* TODO: Add resume link */}
                        {/* or link to schedule a meeting using Calendly or Cal*/}
                        <Link
                            target="_blank"
                            href="https://static.topcv.vn/topcv-cv-uploads/978e787425088f70e7af85581b3f70e4.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            className="font-semibold"
                        >
                            RESUME WORK
                        </Link>
                    </Button>
                    <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
                        {socials.map((s, i) => {
                            const parts = s.link.split('/')
                            const username = parts[parts.length - 1]
                            return (
                                <Link
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    aria-label={`${s.name} Logo`}
                                    className="cursor-pointer flex items-center gap-2 group"
                                >
                                    {s.icon}
                                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                        /{username}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}