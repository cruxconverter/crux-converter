import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/responsive.css";

// Fix for 100vh in mobile browsers
const setVhProperty = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

// Set the --vh custom property on initial load
setVhProperty();

// Update the --vh value on resize and orientation change
window.addEventListener("resize", setVhProperty);
window.addEventListener("orientationchange", setVhProperty);

createRoot(document.getElementById("root")!).render(<App />);
