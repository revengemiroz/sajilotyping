"use client";

import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactTransliterate } from "react-transliterate";
import { useToast } from "@/hooks/use-toast";
import Timezone from "./components/TimeZone";
import Balancer from "react-wrap-balancer";

// Special characters list, moved outside of the component to avoid re-declaration
const specialChars = [
  "ँ",
  "ं",
  "ः",
  "अ",
  "आ",
  "इ",
  "ई",
  "उ",
  "ऊ",
  "ऋ",
  "ऌ",
  "ऍ",
  "ऎ",
  "ए",
  "ऐ",
  "ऑ",
  "ऒ",
  "ओ",
  "औ",
  "क",
  "ख",
  "ग",
  "घ",
  "ङ",
  "च",
  "छ",
  "ज",
  "झ",
  "ञ",
  "ट",
  "ठ",
  "ड",
  "ढ",
  "ण",
  "त",
  "थ",
  "द",
  "ध",
  "न",
  "प",
  "फ",
  "ब",
  "भ",
  "म",
  "य",
  "र",
  "ल",
  "व",
  "श",
  "ष",
  "स",
  "ह",
];

export default function Component() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [showSpecialChars, setShowSpecialChars] = useState(false);
  const { toast } = useToast();

  // Copy to clipboard functionality
  const handleCopyToClipboard = () => {
    if (translatedText) {
      navigator.clipboard.writeText(translatedText);
      toast({
        description: "Copied to clipboard",
        className: "font-medium w-fit m-auto",
      });
    }
  };

  // Save to file functionality
  const handleSaveToFile = () => {
    if (translatedText) {
      const element = document.createElement("a");
      const file = new Blob([translatedText], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "translated_text.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  // Adding special character to input text and updating both inputText and translatedText
  const handleAddSpecialChar = (char) => {
    setInputText((prevText) => prevText + char);
    setTranslatedText((prevText) => prevText + char);
  };

  // Apply a background color to list items
  useEffect(() => {
    const liElements = document.querySelectorAll("li");
    liElements.forEach((li) => {
      li.style.backgroundColor = "#f0f0f0";
    });
  }, [inputText]);

  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      <nav className="py-6 w-full flex items-center justify-center">
        <p className="text-foreground/90 font-bold tracking-tight text-3xl md:text-4xl">
          Aasan Typing
        </p>
      </nav>

      {/* Timezone Component */}
      <Timezone />

      <div className="flex-1 w-full flex items-center justify-center">
        <div className="max-w-md w-full flex-1 px-4 py-6 border shadow-sm rounded-lg flex flex-col bg-white space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide text-center">
            <Balancer>Hindi to English Transliteration</Balancer>
          </h1>

          {/* Text Input for Transliteration */}
          <ReactTransliterate
            renderComponent={(props) => (
              <Textarea
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setTranslatedText(e.target.value); // Keep both texts in sync
                }}
                placeholder="Enter Hindi text here"
                className="w-full p-4 rounded-md text-base border border-input bg-background text-foreground"
                rows={5}
                {...props}
              />
            )}
            value={translatedText}
            onChangeText={setTranslatedText}
            lang={"hi"}
          />

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <Button
              onClick={handleCopyToClipboard}
              disabled={!translatedText}
              className="w-full mb-2 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-copy mr-3"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
              Copy
            </Button>

            <Button
              onClick={handleSaveToFile}
              disabled={!translatedText}
              className="w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-down-to-line"
              >
                <path d="M12 17V3" />
                <path d="m6 11 6 6 6-6" />
                <path d="M19 21H5" />
              </svg>
              <span className="ml-2">Save</span>
            </Button>
          </div>

          {/* Special Characters Section */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              onClick={() => setShowSpecialChars(!showSpecialChars)}
              className="w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-spell-check mr-3"
              >
                <path d="m6 16 6-12 6 12"></path>
                <path d="M8 12h8"></path>
                <path d="m16 20 2 2 4-4"></path>
              </svg>
              {showSpecialChars ? "Hide" : "Show"} Special Characters
            </Button>
            {showSpecialChars && (
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {specialChars.map((char, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAddSpecialChar(char)}
                    className="w-8 h-8 p-0 flex hover:bg-gray-400 transition-all hover:scale-110 items-center justify-center bg-white border border-black shadow-md"
                  >
                    <span className="text-black">{char}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 w-full text-black px-6">
        <div className="container mx-auto flex justify-center items-center">
          <nav>
            <ul className="flex font-medium space-x-4">
              <li>
                <Link href="#" prefetch={false}>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" prefetch={false}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
