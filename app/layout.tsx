import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import Script from "next/script";
import Head from "next/head";
// import "react-transliterate/dist/index.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Typing Hindi - Hindi Typing Made Easy and Fast",
  description:
    "Transliterate English to Hindi effortlessly with our user-friendly tool. Ideal for students and travelers. Overcome language barriers seamlessly!",
  keywords:
    "Hindi Transliteration, English to Hindi Typing, Online Hindi Typing Tool, Free Hindi Transliteration, Type Hindi Online, Romanized Hindi Typing, Google Hindi Typing Tool, Instant Hindi Typing, Convert English to Hindi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>English to Hindi Transliteration</title>
        <meta
          name="description"
          content="Easily transliterate English text to Hindi with our user-friendly tool. Perfect for students, travelers, and anyone looking to bridge the language gap. Experience seamless English to Hindi transliteration today!"
        />
        <meta
          name="keywords"
          content="transliteration, English to Hindi, language translation, Hindi typing, learn Hindi"
        />
        <meta name="author" content="Your Name or Your Company Name" />
        <meta
          name="google-adsense-account"
          content="ca-pub-3843144567571433"
        ></meta>
        <meta property="og:type" content="Hindi Typing" />
      </Head>
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
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG_ID}`}
        />

        <Script id="" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_TAG_ID}', {
              page_path: window.location.pathname,
              });
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3843144567571433"
          crossOrigin="anonymous"
        ></Script>
      </>
    </html>
  );
}
