import { gradeData } from "../data/gradeData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const difficultyColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-orange-100 text-orange-800",
    expert: "bg-red-100 text-red-800",
    elite: "bg-purple-100 text-purple-800",
};

const BoulderingTable = () => {
    const boulderingGrades = gradeData.filter((grade) => grade.bouldering);

    return (
        <section className="py-16 bg-accent/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Bouldering grade comparison
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Comprehensive bouldering grade table showing Font
                        (Fontainebleau), V-Scale (Vermin), and UK Tech
                        equivalents. Bouldering typically starts at higher
                        difficulties than sport climbing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Bouldering grades</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Font</TableHead>
                                                <TableHead>V-Scale</TableHead>
                                                <TableHead>UK Tech</TableHead>
                                                <TableHead>
                                                    Sport equivalent
                                                </TableHead>
                                                <TableHead>Level</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {boulderingGrades.map((grade) => (
                                                <TableRow key={grade.id}>
                                                    <TableCell className="font-medium">
                                                        {grade.bouldering!.font}
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            grade.bouldering!
                                                                .vScale
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            grade.bouldering!
                                                                .ukTech
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        {grade.sport.french}
                                                    </TableCell>
                                                    <TableCell>
                                                        <span
                                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                                difficultyColors[
                                                                    grade
                                                                        .difficulty
                                                                ]
                                                            }`}
                                                        >
                                                            {grade.difficulty}
                                                        </span>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Grade systems explained</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">
                                        Font (Fontainebleau)
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Originating in Fontainebleau, France,
                                        this open‑ended system starts at 1 and
                                        progresses using numbers, letters
                                        (A/B/C) and “+” to represent increasing
                                        technical difficulty of boulder
                                        problems.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">V-Scale</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Developed by John “Vermin” Sherman, this
                                        North American scale runs from VB to
                                        V17, rating only the technical challenge
                                        of each boulder.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">UK Tech</h4>
                                    <p className="text-sm text-muted-foreground">
                                        A single‑number grade (e.g. 5a, 6b)
                                        denoting the hardest move in a boulder
                                        problem from ground level, used
                                        alongside adjectival grades in British
                                        climbing.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoulderingTable;
