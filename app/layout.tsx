import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
    title: {
        default: "Katzenspeicher",
        template: `Katzenspeicher | %s`,
    },
    description: "Speichert hier Eure liebsten Katzenbilder",
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    "h-screen w-screen overflow-hidden bg-background font-sans antialiased flex",
                    fontSans.variable,
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    {children}
                </Providers>
            </body>
        </html>
    );
}
