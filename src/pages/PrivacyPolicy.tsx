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
                        <h2 className="text-xl font-semibold mb-3">
                            1. Introduction
                        </h2>
                        <p>
                            At CruxConverter, we respect your privacy and are
                            committed to protecting your personal data. This
                            Privacy Policy explains how we collect, use, and
                            safeguard your information when you visit our
                            website.
                        </p>
                        <p>
                            By using our website, you consent to the collection
                            and use of information as described in this policy.
                            If you do not agree with our policies and practices,
                            please do not use our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            2. Information We Collect
                        </h2>
                        <p>
                            We collect several types of information from and
                            about users of our website, including:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>Usage Data:</strong> Information about
                                how you interact with our website, such as pages
                                visited, time spent on pages, and other usage
                                statistics.
                            </li>
                            <li>
                                <strong>Device Information:</strong> Information
                                about the device you use to access our website,
                                including IP address, browser type, operating
                                system, and device characteristics.
                            </li>
                            <li>
                                <strong>
                                    Cookies and Similar Technologies:
                                </strong>{" "}
                                We use cookies and similar tracking technologies
                                to track activity on our website and hold
                                certain information to improve your experience.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            3. How We Use Your Information
                        </h2>
                        <p>
                            We use the information we collect for various
                            purposes, including:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                To provide, maintain, and improve our website.
                            </li>
                            <li>
                                To understand how users interact with our
                                website and enhance user experience.
                            </li>
                            <li>
                                To display advertisements that may be of
                                interest to you.
                            </li>
                            <li>
                                To analyze usage patterns and trends to improve
                                our service.
                            </li>
                            <li>
                                To protect our website from unauthorized access
                                or misuse.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            4. Advertising
                        </h2>
                        <p>
                            We work with third-party advertising companies to
                            display ads on our website. These advertisers may
                            use technologies such as cookies and web beacons to
                            collect information about your activities on our
                            website and other websites to provide you with
                            advertising based on your browsing activities and
                            interests.
                        </p>
                        <p>
                            We may use Google AdSense and other advertising
                            networks to serve ads on our website. These
                            third-party ad servers or ad networks use technology
                            to send, directly to your browser, the
                            advertisements that appear on our website. They
                            automatically receive your IP address when this
                            occurs. They may also use other technologies (such
                            as cookies, JavaScript, or Web Beacons) to measure
                            the effectiveness of their advertisements and to
                            personalize the advertising content.
                        </p>
                        <p>
                            You can opt out of personalized advertising by
                            visiting{" "}
                            <a
                                href="https://www.aboutads.info/choices/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.aboutads.info/choices
                            </a>{" "}
                            or{" "}
                            <a
                                href="https://www.youronlinechoices.eu/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.youronlinechoices.eu
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            5. Cookies
                        </h2>
                        <p>
                            Cookies are small text files stored on your device
                            by websites you visit. We use cookies to enhance
                            your experience on our website and collect
                            information about your browsing session.
                        </p>
                        <p>Types of cookies we use:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>Essential Cookies:</strong> Necessary
                                for the operation of our website. They enable
                                core functionality such as security and user
                                preferences.
                            </li>
                            <li>
                                <strong>Analytical/Performance Cookies:</strong>{" "}
                                Allow us to recognize and count the number of
                                visitors and see how visitors move around our
                                website when they are using it.
                            </li>
                            <li>
                                <strong>Functionality Cookies:</strong> Used to
                                recognize you when you return to our website,
                                enabling us to personalize content and remember
                                your preferences.
                            </li>
                            <li>
                                <strong>Targeting Cookies:</strong> Record your
                                visit to our website, the pages you have
                                visited, and the links you have followed. We may
                                use this information to make our website and the
                                advertising displayed on it more relevant to
                                your interests.
                            </li>
                        </ul>
                        <p>
                            You can set your browser to refuse all or some
                            browser cookies, or to alert you when websites set
                            or access cookies. If you disable or refuse cookies,
                            please note that some parts of this website may
                            become inaccessible or not function properly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            6. Third-Party Services
                        </h2>
                        <p>
                            We may use third-party services to help us operate
                            our website or administer activities on our behalf,
                            such as analytics and advertising. These third
                            parties may have access to your information only to
                            perform specific tasks on our behalf and are
                            obligated not to disclose or use it for any other
                            purpose.
                        </p>
                        <p>Third-party services we use may include:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Google Analytics</li>
                            <li>Google AdSense</li>
                            <li>Other advertising networks</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            7. Data Security
                        </h2>
                        <p>
                            We implement appropriate technical and
                            organizational measures to protect your personal
                            information from accidental loss, unauthorized
                            access, use, alteration, and disclosure. However, no
                            method of transmission over the Internet or
                            electronic storage is 100% secure, and we cannot
                            guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            8. Your Rights
                        </h2>
                        <p>
                            Depending on your location, you may have certain
                            rights regarding your personal information,
                            including:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Right to access your personal information.</li>
                            <li>
                                Right to rectify inaccurate personal
                                information.
                            </li>
                            <li>
                                Right to erasure of your personal information.
                            </li>
                            <li>
                                Right to restrict processing of your personal
                                information.
                            </li>
                            <li>Right to data portability.</li>
                            <li>
                                Right to object to processing of your personal
                                information.
                            </li>
                        </ul>
                        <p>
                            To exercise any of these rights, please contact us
                            using the information provided in the "Contact Us"
                            section.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            9. Children's Privacy
                        </h2>
                        <p>
                            Our website is not intended for children under 13
                            years of age. We do not knowingly collect personal
                            information from children under 13. If you are a
                            parent or guardian and believe that your child has
                            provided us with personal information, please
                            contact us, and we will delete such information from
                            our records.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            10. Changes to Our Privacy Policy
                        </h2>
                        <p>
                            We may update our Privacy Policy from time to time.
                            Any changes will be posted on this page with a
                            revised "Last Updated" date. We encourage you to
                            review this Privacy Policy periodically to stay
                            informed about how we are protecting your
                            information.
                        </p>
                        <p>
                            Your continued use of our website following the
                            posting of changes constitutes your acceptance of
                            such changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            11. Contact Us
                        </h2>
                        <p>
                            If you have any questions, concerns, or requests
                            regarding this Privacy Policy or our privacy
                            practices, please contact us at [contact email].
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
