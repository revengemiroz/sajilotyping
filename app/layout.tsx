import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import {} from "next/server";
import Script from "next/script";
// import "react-transliterate/dist/index.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sajilo Typing",
  description:
    "Translate hindi to english which you can download and copy to clipboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="min-h-screen w-full relative">
          {children}
          <div
            className="fixed inset-0 z-[-1] bg-transparent h-screen w-screen" // bg-gradient-to-b from-muted to-background
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--muted)), hsl(var(--background)))",
            }}
          >
            <div
              className="w-full h-full" // bg-[length:50px_50px]
              style={{
                backgroundSize: "50px 50px",
                backgroundImage:
                  "linear-gradient(0deg, transparent 24%, hsl(var(--muted)/80%) 25%, hsl(var(--muted)/80%) 26%, transparent 27%, transparent 74%, hsl(var(--muted)/80%) 75%, hsl(var(--muted)/80%) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(var(--muted)/80%) 25%, hsl(var(--muted)/80%) 26%, transparent 27%, transparent 74%, hsl(var(--muted)/80%) 75%, hsl(var(--muted)/80%) 76%, transparent 77%, transparent)",
              }}
            />
          </div>
        </div>
        <Toaster />
      </body>

      <>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZB5HZTW4N8`}
        />

        <Script id="" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZB5HZTW4N8', {
              page_path: window.location.pathname,
              });
          `}
        </Script>
      </>
    </html>
  );
}
