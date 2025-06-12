import { useState, useMemo } from "react";
import { gradeData } from "../data/gradeData";
import {
    ClimbingType,
    GradeSystem,
    BoulderingSystem,
    GradeData,
} from "../types/grades";

export const useGradeConverter = () => {
    const [climbingType, setClimbingType] = useState<ClimbingType>("sport");
    const [selectedSystem, setSelectedSystem] = useState<
        GradeSystem | BoulderingSystem
    >("french");
    const [inputGrade, setInputGrade] = useState("");

    // Find the grade object based on input
    const findGradeObject = useMemo(() => {
        if (!inputGrade.trim()) return null;

        const normalizedInput = inputGrade.toLowerCase().trim();

        return gradeData.find((grade) => {
            if (climbingType === "sport") {
                const sportGrade = grade.sport[selectedSystem as GradeSystem];
                return (
                    sportGrade && sportGrade.toLowerCase() === normalizedInput
                );
            } else {
                if (!grade.bouldering) return false;
                const boulderingGrade =
                    grade.bouldering[selectedSystem as BoulderingSystem];
                return (
                    boulderingGrade &&
                    boulderingGrade.toLowerCase() === normalizedInput
                );
            }
        });
    }, [inputGrade, climbingType, selectedSystem]);

    // Enhanced conversion with fallback mechanism
    const convertGrade = useMemo(() => {
        const foundGrade = findGradeObject;

        if (!foundGrade) return null;

        // Create a deep copy of the found grade to avoid mutating the original data
        const resultGrade: GradeData = JSON.parse(JSON.stringify(foundGrade));

        // Process sport grades
        if (climbingType === "sport") {
            // Get all systems that need to be checked
            const systems: GradeSystem[] = [
                "french",
                "uiaa",
                "yds",
                "uk",
                "australian",
            ];

            // For each system, check if the grade is empty and needs a fallback
            systems.forEach((system) => {
                if (!resultGrade.sport[system]) {
                    // Find the closest previous grade with a value for this system
                    let prevGradeId = foundGrade.id - 1;

                    while (prevGradeId > 0) {
                        const prevGrade = gradeData.find(
                            (g) => g.id === prevGradeId
                        );

                        if (prevGrade && prevGrade.sport[system]) {
                            // Found a previous grade with a value, use it
                            resultGrade.sport[system] = prevGrade.sport[system];
                            break;
                        }

                        // Continue searching earlier grades
                        prevGradeId--;
                    }
                }
            });
        }
        // Process bouldering grades
        else if (resultGrade.bouldering) {
            // Get all bouldering systems that need to be checked
            const systems: BoulderingSystem[] = ["font", "vScale", "ukTech"];

            // For each system, check if the grade is empty and needs a fallback
            systems.forEach((system) => {
                if (!resultGrade.bouldering![system]) {
                    // Find the closest previous grade with a value for this system
                    let prevGradeId = foundGrade.id - 1;

                    while (prevGradeId > 0) {
                        const prevGrade = gradeData.find(
                            (g) => g.id === prevGradeId
                        );

                        if (
                            prevGrade &&
                            prevGrade.bouldering &&
                            prevGrade.bouldering[system]
                        ) {
                            // Found a previous grade with a value, use it
                            resultGrade.bouldering![system] =
                                prevGrade.bouldering[system];
                            break;
                        }

                        // Continue searching earlier grades
                        prevGradeId--;
                    }
                }
            });
        }

        return resultGrade;
    }, [findGradeObject, climbingType]);

    const getGradeSuggestions = useMemo(() => {
        if (climbingType === "sport") {
            // Create an array of objects with grade and id for sorting
            const gradesWithIds = gradeData
                .map((grade) => ({
                    id: grade.id,
                    value: grade.sport[selectedSystem as GradeSystem],
                }))
                .filter((item) => Boolean(item.value));

            // Sort by id and return only the grade values
            return gradesWithIds
                .sort((a, b) => a.id - b.id)
                .map((item) => item.value);
        } else {
            // Create an array of objects with grade and id for sorting
            const gradesWithIds = gradeData
                .filter((grade) => grade.bouldering)
                .map((grade) => ({
                    id: grade.id,
                    value: grade.bouldering![
                        selectedSystem as BoulderingSystem
                    ],
                }))
                .filter((item) => Boolean(item.value));

            // Sort by id and return only the grade values
            return gradesWithIds
                .sort((a, b) => a.id - b.id)
                .map((item) => item.value);
        }
    }, [climbingType, selectedSystem]);

    return {
        climbingType,
        setClimbingType,
        selectedSystem,
        setSelectedSystem,
        inputGrade,
        setInputGrade,
        convertedGrade: convertGrade,
        gradeSuggestions: getGradeSuggestions,
    };
};
