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
                        <h2 className="text-xl font-semibold mb-3">
                            1. Introduction
                        </h2>
                        <p>
                            Welcome to CruxConverter. These Terms of Service
                            govern your use of our website located at
                            [website-url] and form a binding legal agreement
                            between you and CruxConverter.
                        </p>
                        <p>
                            By accessing or using our website, you confirm that
                            you accept these Terms of Service and agree to
                            comply with them. If you do not agree with these
                            terms, you must not use our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            2. Services
                        </h2>
                        <p>
                            CruxConverter provides a rock climbing grade
                            conversion tool that allows users to convert between
                            different climbing grade systems. The information
                            provided is for reference only and should not be
                            solely relied upon for safety-critical decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            3. User Obligations
                        </h2>
                        <p>When using our website, you agree to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                Use the website in a manner consistent with all
                                applicable laws and regulations.
                            </li>
                            <li>
                                Not engage in any activity that could damage,
                                disable, or impair the functionality of the
                                website.
                            </li>
                            <li>
                                Not attempt to gain unauthorized access to any
                                part of the website or its systems.
                            </li>
                            <li>
                                Not use automated systems or software to extract
                                data from our website (screen scraping).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            4. Intellectual Property
                        </h2>
                        <p>
                            All content on this website, including but not
                            limited to text, graphics, logos, icons, images, and
                            software, is the property of CruxConverter and is
                            protected by international copyright laws.
                        </p>
                        <p>
                            You may view, download, and print content from the
                            website for your personal, non-commercial use only.
                            Any other use, including reproduction, modification,
                            distribution, or republication, without prior
                            written consent from CruxConverter, is strictly
                            prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            5. Disclaimer of Warranties
                        </h2>
                        <p>
                            CruxConverter provides this website and its content
                            on an "as is" and "as available" basis. We make no
                            representations or warranties of any kind, express
                            or implied, regarding the accuracy, reliability, or
                            availability of the website or its content.
                        </p>
                        <p>
                            Climbing grade conversions are provided for
                            informational purposes only. Due to the subjective
                            nature of climbing grades and variations between
                            regions and climbing areas, we cannot guarantee the
                            accuracy of all conversions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            6. Limitation of Liability
                        </h2>
                        <p>
                            To the maximum extent permitted by law,
                            CruxConverter shall not be liable for any indirect,
                            incidental, special, consequential, or punitive
                            damages, or any loss of profits or revenues, whether
                            incurred directly or indirectly, or any loss of
                            data, use, goodwill, or other intangible losses
                            resulting from your use of our website.
                        </p>
                        <p>
                            Rock climbing is an inherently dangerous activity.
                            Users should always verify climbing grades and
                            information from multiple sources before making
                            safety-critical decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            7. Third-Party Links
                        </h2>
                        <p>
                            Our website may contain links to third-party
                            websites that are not owned or controlled by
                            CruxConverter. We have no control over and assume no
                            responsibility for the content, privacy policies, or
                            practices of any third-party websites.
                        </p>
                        <p>
                            We do not warrant or make any representations
                            concerning the accuracy, reliability, or
                            availability of any information on third-party
                            websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            8. Advertising
                        </h2>
                        <p>
                            CruxConverter displays advertisements on the
                            website. These advertisements may be targeted based
                            on the content you view, data about your browser or
                            device, or other non-personally identifiable
                            information.
                        </p>
                        <p>
                            By using our website, you agree to the display of
                            such advertisements. Please refer to our Privacy
                            Policy for more information about how we handle data
                            in relation to advertising.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            9. Changes to Terms
                        </h2>
                        <p>
                            We reserve the right to modify these Terms of
                            Service at any time. If we make material changes, we
                            will notify users by updating the date at the top of
                            these terms and, where appropriate, notify you by
                            email or by means of a notice on our website.
                        </p>
                        <p>
                            Your continued use of the website after such
                            modifications constitutes your acceptance of the
                            revised Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            10. Governing Law
                        </h2>
                        <p>
                            These Terms of Service shall be governed by and
                            construed in accordance with the laws of [Your
                            Country/State], without regard to its conflict of
                            law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            11. Contact Us
                        </h2>
                        <p>
                            If you have any questions about these Terms of
                            Service, please contact us at [contact email].
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
