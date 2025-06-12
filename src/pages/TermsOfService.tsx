import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TermsOfService = () => {
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

                <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

                <div className="prose max-w-none space-y-6">
                    <section>
                        <p>
                            <strong>Effective Date:</strong> June 12, 2025
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            1. Agreement to Terms
                        </h2>
                        <p>
                            By accessing or using CruxConverter, you agree to be
                            bound by these Terms of Service. If you do not agree
                            with these terms, please do not use the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            2. Description of Service
                        </h2>
                        <p>
                            CruxConverter is a free, browser-based tool that
                            allows users to convert climbing grades between
                            different grading systems. It is provided as-is for
                            informational purposes only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            3. No Warranty
                        </h2>
                        <p>
                            We make no guarantees as to the accuracy,
                            reliability, or completeness of the grade
                            conversions provided. Grade equivalencies are
                            subjective and may vary based on region, climbing
                            discipline, and local grading norms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            4. User Responsibilities
                        </h2>
                        <p>When using the service, you agree to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                Use the site solely for lawful and
                                non-commercial purposes.
                            </li>
                            <li>
                                Not attempt to reverse engineer, copy, or
                                distribute the service.
                            </li>
                            <li>
                                Not misuse the application or disrupt its
                                operation.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            5. Intellectual Property
                        </h2>
                        <p>
                            All content, design elements, code, and materials on
                            this website are the intellectual property of
                            CruxConverter or its licensors and are protected
                            under applicable copyright, trademark, and
                            intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            6. Limitation of Liability
                        </h2>
                        <p>
                            To the fullest extent permitted by applicable law,
                            CruxConverter shall not be liable for any direct,
                            indirect, incidental, consequential, or punitive
                            damages arising from or related to the use of this
                            website.
                        </p>
                        <p>
                            Use of this site does not substitute for
                            professional climbing instruction or official grade
                            sources. Always exercise caution in outdoor or
                            indoor climbing activities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            7. Modifications to Terms
                        </h2>
                        <p>
                            We reserve the right to amend these Terms at any
                            time. Updates will be posted on this page with the
                            effective date. Continued use of the website after
                            changes constitutes acceptance of the new Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            8. Governing Law
                        </h2>
                        <p>
                            These Terms are governed by and construed in
                            accordance with the laws of your jurisdiction of
                            residence, without regard to conflict of law
                            principles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            9. Contact Information
                        </h2>
                        <p>
                            If you have any questions or concerns regarding
                            these Terms of Service, please contact us at{" "}
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

export default TermsOfService;
