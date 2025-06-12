import * as React from "react";
import { createContext, ReactNode, useContext } from "react";
import { useResponsive } from "./use-mobile";

// Type for the responsive context state
type ResponsiveContextType = ReturnType<typeof useResponsive>;

// Create the context with a default value
const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
    undefined
);

// Provider component
export function ResponsiveProvider({ children }: { children: ReactNode }) {
    const responsiveState = useResponsive();

    return (
        <ResponsiveContext.Provider value={responsiveState}>
            {children}
        </ResponsiveContext.Provider>
    );
}

// Custom hook to use the responsive context
export function useResponsiveContext() {
    const context = useContext(ResponsiveContext);

    if (context === undefined) {
        throw new Error(
            "useResponsiveContext must be used within a ResponsiveProvider"
        );
    }

    return context;
}
