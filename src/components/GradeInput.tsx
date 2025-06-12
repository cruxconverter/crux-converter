import { useEffect, useRef } from "react";
import { GradeSystem, BoulderingSystem, ClimbingType } from "../types/grades";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useResponsive } from "../hooks/use-mobile";

interface GradeInputProps {
    climbingType: ClimbingType;
    onClimbingTypeChange: (type: ClimbingType) => void;
    selectedSystem: GradeSystem | BoulderingSystem;
    onSystemChange: (system: GradeSystem | BoulderingSystem) => void;
    inputGrade: string;
    onInputChange: (grade: string) => void;
    suggestions: string[];
}

const sportSystems: { value: GradeSystem; label: string }[] = [
    { value: "french", label: "French" },
    { value: "uiaa", label: "UIAA" },
    { value: "yds", label: "YDS" },
    { value: "uk", label: "UK" },
    { value: "australian", label: "Australian" },
];

const boulderingSystems: { value: BoulderingSystem; label: string }[] = [
    { value: "font", label: "Font" },
    { value: "vScale", label: "V-Scale" },
    { value: "ukTech", label: "UK Tech" },
];

const GradeInput = ({
    climbingType,
    onClimbingTypeChange,
    selectedSystem,
    onSystemChange,
    inputGrade,
    onInputChange,
    suggestions,
}: GradeInputProps) => {
    const { isMobile } = useResponsive();
    // Track previous climbing type to detect changes
    const prevClimbingTypeRef = useRef(climbingType);

    // Set default grade system only when climbing type changes or on initial render
    useEffect(() => {
        const prevClimbingType = prevClimbingTypeRef.current;

        // Update the ref for the next render
        prevClimbingTypeRef.current = climbingType;

        // Only set default when climbing type changes or on first render
        if (prevClimbingType !== climbingType) {
            if (climbingType === "sport") {
                onSystemChange("french");
            } else {
                onSystemChange("font");
            }
        }
    }, [climbingType, onSystemChange]);

    return (
        <div className="space-y-4 md:space-y-6">
            <div className="flex gap-2 md:gap-4 justify-center">
                <Button
                    variant={climbingType === "sport" ? "default" : "outline"}
                    onClick={() => onClimbingTypeChange("sport")}
                    className="flex-1 max-w-40 text-xs md:text-sm px-2 md:px-4"
                    size={isMobile ? "sm" : "default"}
                >
                    Sport climbing
                </Button>
                <Button
                    variant={
                        climbingType === "bouldering" ? "default" : "outline"
                    }
                    onClick={() => onClimbingTypeChange("bouldering")}
                    className="flex-1 max-w-40 text-xs md:text-sm px-2 md:px-4"
                    size={isMobile ? "sm" : "default"}
                >
                    Bouldering
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1 md:space-y-2">
                    <Label
                        htmlFor="grade-system"
                        className="text-sm md:text-base"
                    >
                        Grade system
                    </Label>
                    <Select
                        value={selectedSystem}
                        onValueChange={onSystemChange}
                    >
                        <SelectTrigger className="h-8 md:h-10 text-sm md:text-base">
                            <SelectValue placeholder="Select grade system" />
                        </SelectTrigger>
                        <SelectContent>
                            {(climbingType === "sport"
                                ? sportSystems
                                : boulderingSystems
                            ).map((system) => (
                                <SelectItem
                                    key={system.value}
                                    value={system.value}
                                    className="text-sm md:text-base"
                                >
                                    {system.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-1 md:space-y-2 relative">
                    <Label
                        htmlFor="grade-select"
                        className="text-sm md:text-base"
                    >
                        Enter grade
                    </Label>
                    <Select value={inputGrade} onValueChange={onInputChange}>
                        <SelectTrigger
                            id="grade-select"
                            className="h-8 md:h-10 text-sm md:text-base"
                        >
                            <SelectValue placeholder="Select a grade" />
                        </SelectTrigger>
                        <SelectContent>
                            {suggestions.map((grade, index) => (
                                <SelectItem
                                    key={index}
                                    value={grade}
                                    className="text-sm md:text-base"
                                >
                                    {grade}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default GradeInput;
