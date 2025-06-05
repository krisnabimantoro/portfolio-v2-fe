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

      {/* <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
        >
          Krisna Bimantoro
        </motion.h1>
      </LampContainer> */}
      {/* Example extra content to enable scrolling */}
      <div className="mt-20 space-y-10 w-[120vh]">
        <div className="h-96 bg-neutral-800/40 rounded-lg w-full">tes</div>
        <div className="h-96 bg-neutral-800/40 rounded-lg" />
        <div className="h-96 bg-neutral-800/40 rounded-lg" />
        <div className="h-96 bg-neutral-800/40 rounded-lg" />
      </div>
      {/* <Pointer className="fill-blue-500" /> */}
    </div>
  );
}
