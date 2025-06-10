"use client";
import { cn } from "@/lib/utils";

export function CardHero() {
  return (
    <div className="w-full">
        <div className="pointer-events-none absolute inset-y-0 bottom-0 w-full bg-gradient-to-t from-neutral-950/50"></div>
      <div
        className={cn(
          "w-full cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4  ",
          "bg-[url(/krisna.png)] bg-cover ",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(/krisna2.png)] before:fixed  before:opacity-0 before:z-[-1]",
          "hover:bg-[url(/krisna2.png)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">Krisna Bimantoro</h1>
          <p className="font-normal text-base text-gray-50 relative my-2">Software Engineer</p>
        </div>
      </div>
    </div>
  );
}
