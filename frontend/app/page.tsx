"use client";

import * as React from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const [quality, setQuality] = React.useState(100);
  const [promptStrength, setPromptStrength] = React.useState(0.7);
  const [aspectRatio, setAspectRatio] = React.useState("1:1");
  const [imageFormat, setImageFormat] = React.useState("png");
  const [safetyCheck, setSafetyCheck] = React.useState(true);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-5xl font-bold mb-8">
          AI Image Generator
        </h1>

        <div className="w-full max-w-2xl">
          <Textarea
            placeholder="Enter your prompt..."
            className="resize-none"
          />

          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Picture Quality</span>
                <span>{quality}%</span>
              </div>
              <Slider
                defaultValue={[quality]}
                max={100}
                step={1}
                className="w-full"
                onValueChange={(value) => setQuality(value[0])}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Prompt Strength</span>
                <span>{promptStrength}</span>
              </div>
              <Slider
                defaultValue={[promptStrength]}
                max={1}
                step={0.01}
                className="w-full"
                onValueChange={(value) => setPromptStrength(value[0])}
              />
            </div>
            <div className="space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                  <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Select Aspect Ratio
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[calc(100vw-4rem)] sm:w-[500px]">
                  <DropdownMenuItem onClick={() => setAspectRatio("1:1")}>1:1</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setAspectRatio("4:3")}>4:3</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setAspectRatio("16:9")}>16:9</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                  <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Select Image Format
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[calc(100vw-4rem)] sm:w-[500px]">
                  <DropdownMenuItem onClick={() => setImageFormat("png")}>PNG</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setImageFormat("jpg")}>JPG</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setImageFormat("webp")}>WebP</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="safety-check" 
                  checked={safetyCheck}
                  onCheckedChange={(value) => setSafetyCheck(value)}
                />
                <label 
                  htmlFor="safety-check" 
                  className="text-sm text-white"
                >
                  Disable Safety Check
                </label>
              </div>
            </div>
          </div>

          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors">
            Generate Image
          </button>
        </div>

        <div className="mt-8 w-full max-w-2xl aspect-square bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
          <p className="text-gray-400">Your generated image will appear here</p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-400">
        <p>Powered by AI</p>
      </footer>
    </div>
  );
}
