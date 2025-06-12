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

const ComparisonTable = () => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Sport climbing grade comparison
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Complete comparison table showing equivalent grades
                        across all major sport climbing systems. Color coding
                        indicates difficulty level from beginner (green) to
                        elite (purple).
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Sport climbing grades</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>French</TableHead>
                                                <TableHead>UIAA</TableHead>
                                                <TableHead>YDS</TableHead>
                                                <TableHead>UK</TableHead>
                                                <TableHead>
                                                    Australian
                                                </TableHead>
                                                <TableHead>Level</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {gradeData.map((grade) => (
                                                <TableRow key={grade.id}>
                                                    <TableCell className="font-medium">
                                                        {grade.sport.french}
                                                    </TableCell>
                                                    <TableCell>
                                                        {grade.sport.uiaa}
                                                    </TableCell>
                                                    <TableCell>
                                                        {grade.sport.yds}
                                                    </TableCell>
                                                    <TableCell>
                                                        {grade.sport.uk}
                                                    </TableCell>
                                                    <TableCell>
                                                        {grade.sport.australian}
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
                                    <h4 className="font-semibold">French</h4>
                                    <p className="text-sm text-muted-foreground">
                                        numeric scale with optional letters and
                                        "+", used mainly in Europe to express
                                        the overall physical and technical
                                        challenge of sport climbing routes.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">UIAA</h4>
                                    <p className="text-sm text-muted-foreground">
                                        A Roman‑numeral scale (I to VI+), mainly
                                        used in Central/Eastern Europe, to
                                        indicate the general technical
                                        difficulty of free climbs.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Yosemite Decimal System (YDS)
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        A North American system starting with
                                        class 5 for technical routes; higher
                                        decimals and letters (e.g., 5.10a)
                                        denote increasing technical challenge.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">UK</h4>
                                    <p className="text-sm text-muted-foreground">
                                        A two-part system: an adjectival grade
                                        (e.g., Severe, E1) reflecting overall
                                        seriousness and difficulty, paired with
                                        a technical grade (e.g., 5a, 6b) for the
                                        hardest move.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Australian
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        An open-ended numeric scale (starting
                                        from 1) that conveys overall route
                                        difficulty without subdivisions,
                                        incorporating technical, protection and
                                        route-length factors
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

export default ComparisonTable;
