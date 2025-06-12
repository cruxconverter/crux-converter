import { useResponsive } from "../hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ResponsiveContainerProps {
    children: ReactNode;
    className?: string;
    mobileClassName?: string;
    tabletClassName?: string;
    desktopClassName?: string;
}

export function ResponsiveContainer({
    children,
    className = "",
    mobileClassName = "",
    tabletClassName = "",
    desktopClassName = "",
}: ResponsiveContainerProps) {
    const { isMobile, isTablet, isDesktop } = useResponsive();

    return (
        <div
            className={cn(
                className,
                isMobile && mobileClassName,
                isTablet && tabletClassName,
                isDesktop && desktopClassName
            )}
        >
            {children}
        </div>
    );
}

export function ResponsiveOnly({
    children,
    mobile = false,
    tablet = false,
    desktop = false,
}: {
    children: ReactNode;
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
}) {
    const { isMobile, isTablet, isDesktop } = useResponsive();

    if (
        (mobile && isMobile) ||
        (tablet && isTablet) ||
        (desktop && isDesktop)
    ) {
        return <>{children}</>;
    }

    return null;
}
