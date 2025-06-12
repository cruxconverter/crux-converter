import { Mountain, Github, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-4 py-12">
                {/* Remove Footer Ad Space */}

                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Mountain className="w-6 h-6 mr-2 text-green-400" />
                            <h3 className="text-xl font-bold">CruxConverter</h3>
                        </div>
                        <p className="text-slate-300 mb-4">
                            The most comprehensive rock climbing grade
                            conversion tool. Convert between sport climbing and
                            bouldering grades across all major international
                            systems.
                        </p>
                        {/* <div className="flex space-x-4">
                            <Github className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                            <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                        </div> */}
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick links
                        </h4>
                        <ul className="space-y-2 text-slate-300">
                            <li>
                                <a
                                    href="#converter"
                                    className="hover:text-white"
                                >
                                    Grade converter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sport-table"
                                    className="hover:text-white"
                                >
                                    Sport climbing table
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#bouldering-table"
                                    className="hover:text-white"
                                >
                                    Bouldering table
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-slate-300">
                            <li>
                                <Link
                                    to="/privacy"
                                    className="hover:text-white"
                                >
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-white">
                                    Terms of service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
                    <p>&copy; 2025 CruxConverter. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
