/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6AosZSQbU1f
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactTransliterate } from "react-transliterate";
import { useToast } from "@/hooks/use-toast";

export default function Component() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [showSpecialChars, setShowSpecialChars] = useState(false);

  const { toast } = useToast();

  const handleTranslate = () => {
    const translatedContent = translateHindiToEnglish(inputText);
    setTranslatedText(translatedContent);
  };
  const handleTransliterate = () => {
    const transliteratedContent = transliterateHindiToEnglish(inputText);
    setTranslatedText(transliteratedContent);
  };
  const translateHindiToEnglish = (text) => {
    return "This is the translated English text.";
  };
  const transliterateHindiToEnglish = (text) => {
    return "This is the transliterated English text.";
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    toast({
      description: "Copied to clipboard",
      className: "font-medium w-fit m-auto",
    });
  };
  const handleSaveToFile = () => {
    const element = document.createElement("a");
    const file = new Blob([translatedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "translated_text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
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
  const handleAddSpecialChar = (char) => {
    setInputText((prevText) => prevText + char);
  };

  useEffect(() => {
    // Grab all <ul> elements
    const ulElements = document.querySelectorAll("ul");
    console.log({ ulElements });

    // Grab all <li> elements
    const liElements = document.querySelectorAll("li");

    // Do something with all the <ul> elements (e.g., log them)
    ulElements.forEach((ul, index) => {
      console.log(`UL ${index}:`, ul);
    });

    // Do something with all the <li> elements (e.g., change their background color)
    liElements.forEach((li, index) => {
      console.log(`LI ${index}:`, li);
      li.style.backgroundColor = "#f0f0f0"; // Set a light grey background color
    });
  }, [inputText]); // Runs only once after the component mounts

  return (
    <div className="flex flex-col items-center  min-h-screen ">
      <nav className="py-10 w-full flex items-center justify-center">
        <p className="text-foreground/90 font-bold tracking-tight text-4xl">
          Sajilo Typing
        </p>
      </nav>
      <div className="flex-1 w-full flex items-center justify-center">
        <div className=" max-w-md w-full  flex-1 px-6 py-6 border shadow-sm rounded-lg flex flex-col bg-white h-fit space-y-4 ">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Hindi to English Translator
          </h1>
          <ReactTransliterate
            renderComponent={(props) => (
              <Textarea
                value={inputText}
                // onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter Hindi text here"
                className="w-full p-4 rounded-md border border-input bg-background text-foreground"
                rows={5}
                {...props}
              />
            )}
            value={translatedText}
            onChangeText={(text) => {
              setTranslatedText(text);
            }}
            lang={"hi"}
          />
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <Button
              onClick={handleCopyToClipboard}
              disabled={translatedText.length === 0}
              className="w-full mb-2 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-copy mr-3"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
              Copy
            </Button>
            <Button
              onClick={handleSaveToFile}
              disabled={translatedText.length === 0}
              className="w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-down-to-line"
              >
                <path d="M12 17V3" />
                <path d="m6 11 6 6 6-6" />
                <path d="M19 21H5" />
              </svg>
              <span className="ml-2">Save</span>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              onClick={() => setShowSpecialChars((prev) => !prev)}
              className="w-full "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-spell-check mr-3"
              >
                <path d="m6 16 6-12 6 12"></path>
                <path d="M8 12h8"></path>
                <path d="m16 20 2 2 4-4"></path>
              </svg>
              {showSpecialChars ? "Hide" : "Show"} Special Characters
            </Button>
            {showSpecialChars && (
              <div className="grid grid-cols-8 gap-2">
                {specialChars.map((char, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAddSpecialChar(char)}
                    className="w-8 h-8 p-0 flex items-center justify-center bg-white border border-black shadow-md"
                  >
                    <span className="text-black">{char}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="py-4 w-full ">
        <footer className=" text-black py-4 px-6">
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
    </div>
  );
}
