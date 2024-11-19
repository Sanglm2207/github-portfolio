import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {/* Write 1-2 sentences about yourself */}
                    I am a skilled software developer passionate about designing efficient, user-friendly applications. 
                    I thrive on solving challenges and continuously improving my craft through innovation and learning.
                </p>
            </CardContent>
        </Card>
    )
}