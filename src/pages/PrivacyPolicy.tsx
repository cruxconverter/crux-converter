import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-6">
                    <Link to="/">
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2"
                        >
                            <Home className="h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>

                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <div className="prose max-w-none space-y-6">
                    <section>
                        <p>
                            <strong>Effective Date:</strong> June 12, 2025
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            1. Introduction
                        </h2>
                        <p>
                            This Privacy Policy describes how CruxConverter
                            ("we", "us", or "our") handles information when you
                            access or use our website. We are committed to
                            protecting your privacy and ensuring transparency
                            regarding any data that may be collected.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            2. Data Collection
                        </h2>
                        <p>
                            CruxConverter is a fully client-side application. We
                            do not collect, process, or store any personal
                            information or usage data. No user data is
                            transmitted to any server.
                        </p>
                        <p>
                            Consequently, we do not use cookies, web beacons,
                            local storage tracking, analytics tools, or any
                            third-party services for user monitoring or
                            profiling.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            3. Third-Party Services
                        </h2>
                        <p>
                            CruxConverter does not integrate or rely on any
                            third-party analytics, advertising, marketing, or
                            user-tracking technologies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            4. Children's Privacy
                        </h2>
                        <p>
                            This website is not directed to children under the
                            age of 13. We do not knowingly collect personal data
                            from children. If you believe a child has provided
                            us with personal data, please contact us, and we
                            will take appropriate action.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            5. Changes to This Policy
                        </h2>
                        <p>
                            We may revise this Privacy Policy at any time. All
                            changes will be effective upon posting the updated
                            version on our website. We recommend reviewing this
                            page periodically to stay informed of any
                            modifications.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            6. Contact Information
                        </h2>
                        <p>
                            If you have any questions, concerns, or requests
                            regarding this Privacy Policy, you may contact us at{" "}
                            <a href="mailto:cruxconverter@gmail.com">
                                cruxconverter@gmail.com
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
