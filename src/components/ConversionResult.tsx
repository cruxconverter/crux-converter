import { GradeData, ClimbingType } from "../types/grades";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useResponsive } from "../hooks/use-mobile";

interface ConversionResultProps {
    grade: GradeData | null;
    climbingType: ClimbingType;
}

const difficultyColors = {
    beginner: "from-green-500 to-green-600",
    intermediate: "from-yellow-500 to-orange-500",
    advanced: "from-orange-500 to-red-500",
    expert: "from-red-500 to-red-700",
    elite: "from-purple-600 to-purple-800",
};

const difficultyLabels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
    elite: "Elite",
};

const ConversionResult = ({ grade, climbingType }: ConversionResultProps) => {
    const { isMobile } = useResponsive();

    if (!grade) {
        return (
            <Card className="w-full max-w-4xl mx-auto">
                <CardContent
                    className={`${isMobile ? "p-4" : "p-8"} text-center`}
                >
                    <p className="text-muted-foreground text-sm md:text-base">
                        Enter a grade above to see conversions
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader className={`text-center ${isMobile ? "p-3" : ""}`}>
                <div
                    className={`w-full h-2 md:h-3 rounded-full bg-gradient-to-r ${
                        difficultyColors[grade.difficulty]
                    } mb-2 md:mb-4`}
                />
                <CardTitle className="text-xl md:text-2xl">
                    {difficultyLabels[grade.difficulty]} Grade
                </CardTitle>
            </CardHeader>

            <CardContent className={`${isMobile ? "p-3" : "p-6"}`}>
                {climbingType === "sport" ? (
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4">
                        <div className="text-center p-2 md:p-4 bg-accent rounded-lg">
                            <p className="text-xs md:text-sm font-medium text-muted-foreground">
                                French
                            </p>
                            <p className="text-lg md:text-2xl font-bold">
                                {grade.sport.french}
                            </p>
                        </div>
                        <div className="text-center p-2 md:p-4 bg-accent rounded-lg">
                            <p className="text-xs md:text-sm font-medium text-muted-foreground">
                                UIAA
                            </p>
                            <p className="text-lg md:text-2xl font-bold">
                                {grade.sport.uiaa}
                            </p>
                        </div>
                        <div className="text-center p-2 md:p-4 bg-accent rounded-lg">
                            <p className="text-xs md:text-sm font-medium text-muted-foreground">
                                YDS
                            </p>
                            <p className="text-lg md:text-2xl font-bold">
                                {grade.sport.yds}
                            </p>
                        </div>
                        <div className="text-center p-2 md:p-4 bg-accent rounded-lg">
                            <p className="text-xs md:text-sm font-medium text-muted-foreground">
                                UK
                            </p>
                            <p className="text-lg md:text-2xl font-bold">
                                {grade.sport.uk}
                            </p>
                        </div>
                        <div className="text-center p-2 md:p-4 bg-accent rounded-lg">
                            <p className="text-xs md:text-sm font-medium text-muted-foreground">
                                Australian
                            </p>
                            <p className="text-lg md:text-2xl font-bold">
                                {grade.sport.australian}
                            </p>
                        </div>
                    </div>
                ) : grade.bouldering ? (
                    <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-4">
                        <div className="text-center p-2 md:p-4 bg-accent rounded-lg">
                            <p className="text-xs md:text-sm font-medium text-muted-foreground">
                                Font
                            </p>
                            <p className="text-lg md:text-2xl font-bold">
                                {grade.bouldering.font}
                            </p>
                        </div>
                        <div className="text-center p-2 md:p-4 bg-accent rounded-lg">
                            <p className="text-xs md:text-sm font-medium text-muted-foreground">
                                V-Scale
                            </p>
                            <p className="text-lg md:text-2xl font-bold">
                                {grade.bouldering.vScale}
                            </p>
                        </div>
                        <div className="text-center p-2 md:p-4 bg-accent rounded-lg">
                            <p className="text-xs md:text-sm font-medium text-muted-foreground">
                                UK Tech
                            </p>
                            <p className="text-lg md:text-2xl font-bold">
                                {grade.bouldering.ukTech}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-sm md:text-base text-muted-foreground">
                        No bouldering grades available for this level
                    </p>
                )}
            </CardContent>
        </Card>
    );
};

export default ConversionResult;
