"use client";
import React from "react";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";

export function CardAbout() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-full rounded-lg w-full">
      <TextRevealCard text="You know the business" revealText="I know the chemistry ">
        <TextRevealCardTitle>About Me</TextRevealCardTitle>
        <TextRevealCardDescription className="text-justify">
          I'm Krisna Bimantoro, and I am a final-year software engineering student with hands-on experience in managing and developing
          web-based platforms across diverse domains, including legal education, accounting practicum, and early childhood school systems. I
          have led several project where I played multiple roles such as Project Manager, System Analyst, DevOps Engineer, UI/UX Designer,
          and Backend/Frontend Developer.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
