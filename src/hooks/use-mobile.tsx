import * as React from "react";

// Breakpoints based on common device sizes
const breakpoints = {
    xs: 320, // Small phones
    sm: 480, // Medium phones
    md: 768, // Large phones/Small tablets
    lg: 1024, // Tablets/Small laptops
    xl: 1280, // Desktops
};

type DeviceSize = keyof typeof breakpoints;
type Orientation = "portrait" | "landscape";

interface ResponsiveState {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    deviceSize: DeviceSize;
    orientation: Orientation;
    width: number;
    height: number;
}

export function useResponsive(): ResponsiveState {
    const [state, setState] = React.useState<ResponsiveState>({
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        deviceSize: "xl",
        orientation: "landscape",
        width: typeof window !== "undefined" ? window.innerWidth : 1280,
        height: typeof window !== "undefined" ? window.innerHeight : 800,
    });

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const orientation: Orientation =
                height > width ? "portrait" : "landscape";

            // Determine device size based on width
            let deviceSize: DeviceSize = "xl";
            if (width < breakpoints.sm) deviceSize = "xs";
            else if (width < breakpoints.md) deviceSize = "sm";
            else if (width < breakpoints.lg) deviceSize = "md";
            else if (width < breakpoints.xl) deviceSize = "lg";

            setState({
                isMobile: width < breakpoints.md,
                isTablet: width >= breakpoints.md && width < breakpoints.lg,
                isDesktop: width >= breakpoints.lg,
                deviceSize,
                orientation,
                width,
                height,
            });
        };

        // Initial calculation
        handleResize();

        // Add event listeners for window resize and orientation change
        window.addEventListener("resize", handleResize);
        window.addEventListener("orientationchange", handleResize);

        // Clean up event listeners
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("orientationchange", handleResize);
        };
    }, []);

    return state;
}

// Keep the original hook for backward compatibility
export function useIsMobile(): boolean {
    const { isMobile } = useResponsive();
    return isMobile;
}
