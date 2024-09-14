/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6AosZSQbU1f
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [activeTab, setActiveTab] = useState("translate");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [showSpecialChars, setShowSpecialChars] = useState(false);
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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="max-w-md w-full px-4 py-8 space-y-4 border rounded-md">
        <h1 className="text-3xl font-bold text-foreground">
          Hindi to English Translator
        </h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 gap-2">
            <TabsTrigger value="translate">Translate</TabsTrigger>
            <TabsTrigger value="transliterate">Transliterate</TabsTrigger>
          </TabsList>
          <TabsContent value="translate">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter Hindi text here"
              className="w-full p-4 rounded-md border border-input bg-background text-foreground"
              rows={5}
            />
            <div className="flex flex-col md:flex-row justify-between">
              <Button
                onClick={handleTranslate}
                className="w-full md:w-1/2 mr-2 mb-2 md:mb-0"
              >
                Translate
              </Button>
              <Button
                onClick={handleCopyToClipboard}
                className="w-full md:w-1/4 ml-2 mb-2 md:mb-0"
              >
                Copy
              </Button>
              <Button
                onClick={handleSaveToFile}
                className="w-full md:w-1/4 ml-2"
              >
                Save
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="transliterate">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter Hindi text here"
              className="w-full p-4 rounded-md border border-input bg-background text-foreground"
              rows={5}
            />
            <div className="flex flex-col md:flex-row justify-between">
              <Button
                onClick={handleTransliterate}
                className="w-full md:w-1/2 mr-2 mb-2 md:mb-0"
              >
                Transliterate
              </Button>
              <Button
                onClick={handleCopyToClipboard}
                className="w-full md:w-1/4 ml-2 mb-2 md:mb-0"
              >
                Copy
              </Button>
              <Button
                onClick={handleSaveToFile}
                className="w-full md:w-1/4 ml-2"
              >
                Save
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        {translatedText && (
          <div className="p-4 rounded-md border border-input bg-background text-foreground">
            <h2 className="text-lg font-medium mb-2">Translated Text:</h2>
            <p>{translatedText}</p>
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => setShowSpecialChars((prev) => !prev)}
            className="w-full md:w-auto"
          >
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
  );
}
