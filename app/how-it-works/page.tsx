/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tkYdutHGLoz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hindi Typing | How It Works",
  description:
    "Easily transliterate English text to Hindi with our user-friendly tool. Perfect for students, travelers, and anyone looking to bridge the language gap. Experience seamless English to Hindi transliteration today! Learn how it works",
};

export default function Component() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="flex flex-col items-center justify-center min-h-[100dvh]  px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8 border bg-background p-8 rounded-md shadow-md">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">How It Works</h1>
            <p className="text-muted-foreground">
              Our English to Hindi transliteration tool makes it easy to convert
              your text to the Hindi script. Simply enter your English words or
              phrases, and we'll provide you with the corresponding Hindi
              transliteration.
            </p>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <FileInputIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-medium text-foreground">
                  Input English
                </h3>
                <p className="text-center text-muted-foreground">
                  Enter the English word or phrase you want to transliterate.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <ImportIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-medium text-foreground">
                  Transliterate
                </h3>
                <p className="text-center text-muted-foreground">
                  Our tool will automatically convert your text to the
                  corresponding Hindi script.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CopyIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-medium text-foreground">
                  Copy or Download
                </h3>
                <p className="text-center text-muted-foreground">
                  You can copy the transliterated text or download it as an
                  image.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Try It Now
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Examples</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="border bg-muted/60 p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-medium text-foreground">
                  Dhanyavaad
                </h3>
                <p className="text-xl text-muted-foreground">धन्यवाद</p>
              </div>
              <div className="border bg-muted/60 p-4 rounded-md shadow-sm">
                <h3 className="text-lg  font-medium text-foreground">
                  Main tumse pyaar karta hoon
                </h3>
                <p className="text-xl text-muted-foreground">
                  मैं तुमसे प्यार करता हूँ
                </p>
              </div>
              <div className="border bg-muted/60 p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-medium text-foreground">lauude</h3>
                <p className="text-xl text-muted-foreground">लौडे</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  );
}

function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function FileInputIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M2 15h10" />
      <path d="m9 18 3-3-3-3" />
    </svg>
  );
}

function ImportIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  );
}
