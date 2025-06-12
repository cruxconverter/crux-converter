import Header from "../components/Header";
import GradeConverter from "../components/GradeConverter";
import ComparisonTable from "../components/ComparisonTable";
import BoulderingTable from "../components/BoulderingTable";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <main>
                <div id="converter">
                    <GradeConverter />
                </div>

                <div id="sport-table">
                    <ComparisonTable />
                </div>

                <div id="bouldering-table">
                    <BoulderingTable />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Index;
