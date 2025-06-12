import { useGradeConverter } from "../hooks/useGradeConverter";
import GradeInput from "./GradeInput";
import ConversionResult from "./ConversionResult";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { useResponsive } from "../hooks/use-mobile";

const GradeConverter = () => {
    const {
        climbingType,
        setClimbingType,
        selectedSystem,
        setSelectedSystem,
        inputGrade,
        setInputGrade,
        convertedGrade,
        gradeSuggestions,
    } = useGradeConverter();

    const { isMobile } = useResponsive();

    return (
        <section className="py-8 md:py-16 bg-gradient-to-b from-background to-accent/20">
            <ResponsiveContainer
                className="container mx-auto px-4"
                mobileClassName="px-2"
            >
                <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
                    <Card>
                        <CardHeader className={isMobile ? "px-3 py-4" : ""}>
                            <CardTitle className="text-xl md:text-2xl">
                                Convert climbing grades
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base">
                                Choose between sport climbing and bouldering,
                                then select your preferred grading system
                            </CardDescription>
                        </CardHeader>
                        <CardContent
                            className={`space-y-4 md:space-y-6 ${
                                isMobile ? "px-3 py-4" : ""
                            }`}
                        >
                            <GradeInput
                                climbingType={climbingType}
                                onClimbingTypeChange={setClimbingType}
                                selectedSystem={selectedSystem}
                                onSystemChange={setSelectedSystem}
                                inputGrade={inputGrade}
                                onInputChange={setInputGrade}
                                suggestions={gradeSuggestions}
                            />
                        </CardContent>
                    </Card>

                    <ConversionResult
                        grade={convertedGrade}
                        climbingType={climbingType}
                    />
                </div>
            </ResponsiveContainer>
        </section>
    );
};

export default GradeConverter;
