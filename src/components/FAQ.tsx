import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Frequently asked questions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Everything you need to know about climbing grades and
                        grade conversion systems.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>FAQ</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem value="what-are-climbing-grades">
                                    <AccordionTrigger>
                                        What are climbing grades?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Climbing grades are standardized systems
                                        used to rate the difficulty of rock
                                        climbing routes and boulder problems.
                                        They help climbers choose appropriate
                                        challenges and track their progression.
                                        Different regions developed their own
                                        systems, which is why conversion tools
                                        like this are essential for traveling
                                        climbers.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="sport-vs-bouldering">
                                    <AccordionTrigger>
                                        What's the difference between sport
                                        climbing and bouldering grades?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Sport climbing grades rate longer routes
                                        with protection (bolts or gear), while
                                        bouldering grades rate short, powerful
                                        problems typically under 20 feet tall.
                                        Bouldering grades generally represent
                                        harder climbing than equivalent sport
                                        grades because boulder problems are
                                        shorter and more intense.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="most-common-systems">
                                    <AccordionTrigger>
                                        Which grading systems are most commonly
                                        used?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        For sport climbing: French grades
                                        (4a-9c) are most widely used
                                        internationally, YDS (5.5-5.15d) in
                                        North America, and UIAA (IV-XIII) in
                                        parts of Europe. For bouldering:
                                        Font/Fontainebleau (3-9a) is most common
                                        worldwide, while V-Scale (VB-V17) is
                                        popular in the United States.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="grade-accuracy">
                                    <AccordionTrigger>
                                        How accurate are grade conversions?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Grade conversions provide good
                                        approximations, but they're not perfect
                                        due to differences in how systems
                                        evolved and regional preferences.
                                        Factors like rock type, protection
                                        quality, and local grading traditions
                                        can cause variations. Use conversions as
                                        guidelines, but always be prepared to
                                        adjust based on local conditions.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="beginner-grades">
                                    <AccordionTrigger>
                                        What grades should beginners start with?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Most beginners start with grades around
                                        4a-5b in French (5.5-5.9 YDS) for sport
                                        climbing, and V0-V2 (Font 4-5+) for
                                        bouldering. However, this varies greatly
                                        based on natural ability, fitness level,
                                        and previous experience with related
                                        activities. Start easy and progress
                                        gradually to build technique and
                                        strength safely.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="grade-progression">
                                    <AccordionTrigger>
                                        How quickly do climbers typically
                                        progress through grades?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Grade progression varies enormously
                                        between individuals. Many climbers see
                                        rapid improvement in their first year,
                                        potentially progressing 3-5 grades.
                                        After that, progress typically slows,
                                        with each grade taking months or years
                                        to achieve at higher levels. Focus on
                                        technique, consistency, and enjoying the
                                        process rather than rushing through
                                        grades.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="elite-grades">
                                    <AccordionTrigger>
                                        What are considered elite grades?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Elite grades typically start around
                                        8b/5.13d for sport climbing and V13/Font
                                        8A for bouldering. These grades require
                                        years of dedicated training, exceptional
                                        technique, and physical conditioning.
                                        Only a small percentage of climbers ever
                                        reach this level, and grades above
                                        9a/5.14d or V15/Font 8B+ are achieved by
                                        world-class athletes.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
