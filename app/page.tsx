"use client";

import Image from "next/image";
import React from "react";
import { ReactTransliterate } from "react-transliterate";
import { Textarea } from "../components/ui/textarea";

export default function Home() {
  const [text, setText] = React.useState("");

  return (
    <div className="bg-gray-300/15 h-screen flex items-center justify-center">
      <ReactTransliterate
        renderComponent={(props) => (
          <Textarea
            {...props}
            className="min-w-[50vw] border-2 min-h-[200px] p-2 rounded-md"
          />
        )}
        className="border-2 p-2 rounded-md text-lg"
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        lang="hi"
        placeholder="Type something to translate"
      />
    </div>
  );
}
