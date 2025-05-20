import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { div } from "motion/react-client";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen  w-full rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center overflow-auto ">
      <div
        className={cn(
          "pointer-events-none fixed inset-0 [background-size:40px_40px] select-none ",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight className=" fixed -top-40 left-0 md:-top-20 md:left-60 " fill="white" />
      <div className="h-dvh flex items-center ">
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Hi <br /> Thank You Was Coming in Here.
          </h1>
          <div className="mx-auto mt-4 max-w-lg text-base text-center font-bold tracking-tight md:text-base  text-neutral-300">
            Do you want to know more
            <PointerHighlight
              rectangleClassName="bg-neutral-800 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10"> about me?</span>
            </PointerHighlight>
          </div>
        </div>
      </div>
      {/* Example extra content to enable scrolling */}
      <div className="mt-20 space-y-10 w-[120vh]">
        <div className="h-96 bg-neutral-800/40 rounded-lg w-full">tes</div>
        <div className="h-96 bg-neutral-800/40 rounded-lg" />
        <div className="h-96 bg-neutral-800/40 rounded-lg" />
        <div className="h-96 bg-neutral-800/40 rounded-lg" />
      </div>
    </div>
  );
}
