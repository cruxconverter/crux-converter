// Grade system type definitions
export interface SportGrade {
    french: string;
    uiaa: string;
    yds: string;
    uk: string;
    australian: string;
}

export interface BoulderingGrade {
    font: string;
    vScale: string;
    ukTech: string;
}

export type GradeSystem = "french" | "uiaa" | "yds" | "uk" | "australian";
export type BoulderingSystem = "font" | "vScale" | "ukTech";
export type ClimbingType = "sport" | "bouldering";

export interface GradeData {
    id: number;
    difficulty: "beginner" | "intermediate" | "advanced" | "expert" | "elite";
    sport: SportGrade;
    bouldering?: BoulderingGrade;
}
