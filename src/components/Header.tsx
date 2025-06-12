import { Mountain } from "lucide-react";
import { useResponsive } from "../hooks/use-mobile";

const Header = () => {
    const { isMobile } = useResponsive();

    return (
        <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
            <div className="container mx-auto px-4 py-4 md:py-8">
                <div className="flex items-center justify-center mb-3 md:mb-6">
                    <Mountain
                        className={`${
                            isMobile ? "w-7 h-7" : "w-10 h-10"
                        } mr-2 text-green-400`}
                    />
                    <h1 className="text-2xl md:text-4xl font-bold">
                        CruxConverter
                    </h1>
                </div>
                <p className="text-base md:text-xl text-center text-slate-200 max-w-3xl mx-auto">
                    Convert between climbing grade systems instantly. Support
                    for sport climbing and bouldering grades across French,
                    UIAA, YDS, UK, and V-Scale systems.
                </p>
            </div>
        </header>
    );
};

export default Header;
