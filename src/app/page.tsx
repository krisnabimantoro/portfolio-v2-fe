"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { div } from "motion/react-client";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Pointer } from "@/components/magicui/pointer";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Pencil, Search, Settings } from "lucide-react";
import OrbitingSKill from "./components-section/grid/orbiting";
import { TimelinePortfolio } from "./components-section/timeline";
import MarqueeSection from "./components-section/marquee-section";

import { CardProject } from "./components-section/card/card-project";
import { CardHero } from "./components-section/card/card-hero.";
import { CardAbout } from "./components-section/card/card-about";
import CardActivity from "./components-section/card/card-activity";

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
      <section>
        <div className="h-dvh flex items-center ">
          <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
            <BlurFade delay={0.25 * 0.05} inView>
              <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
                Helloo 👋
                <br /> Thank You Was Coming in Here.
              </h1>
            </BlurFade>
            <BlurFade delay={0.25} inView>
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
            </BlurFade>
          </div>
        </div>
      </section>
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden text-white">
        <VelocityScroll>Krisna Bimantoro</VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </section>

      <section className="w-[150vh] z-10 mt-60">
        <div className="flex flex-col relative w-full items-start justify-end gap-3">
          <BlurFade className="h-48 w-full bg-[url(/pexel.jpg)] bg-cover p-8 rounded-lg" delay={0.25} inView>
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans ">Get to know about Krisna.</h2>
          </BlurFade>

          <div className=" flex flex-row gap-3 w-full relative z-10">
            <BlurFade inView delay={0.5} className="h-96 w-2xl bg-neutral-50 rounded-lg">
              <CardHero />
            </BlurFade>

            <BlurFade inView delay={0.75} className="h-96 w-full bg-white rounded-lg">
              <CardAbout />
            </BlurFade>

            <BlurFade inView delay={1} className="flex flex-col gap-3 w-full ">
              <CardActivity />
              <BlurFade inView delay={1.25} className="h-fit w-full items-center justify-center flex bg-neutral-900 ">
                <OrbitingSKill />
              </BlurFade>
            </BlurFade>
          </div>
          <div className="absolute w-full h-48 flex justify-center items-center bg-neutral-900 rounded-lg  z-0">
            <MarqueeSection />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-950/60"></div>
          </div>
        </div>
      </section>

      <section className="w-full relative z-10 my-20"></section>

      <section className="w-full relative z-10 my-20 flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Projects
          </h1>
          <h1 className=" text-center text-4xl font-bold md:text-7xl">🧤</h1>
        </div>
        <div className="grid grid-cols-2 w-[150vh] items-center justify-items-center gap-5 mt-10 gap-y-10 ">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </section>

      <div className="mt-20 space-y-10 w-[150vh]">
        <div className="h-96 bg-neutral-800/40 rounded-lg w-full">tesasdadasd</div>
        <div className="h-96 bg-neutral-800/40 rounded-lg" />
        <div className="h-96 bg-neutral-800/40 rounded-lg" />
        <div className="h-96 bg-neutral-800/40 rounded-lg" />
      </div>
      {/* <Pointer className="fill-blue-500" /> */}
    </div>
  );
}
