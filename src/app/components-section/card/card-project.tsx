"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { cn } from "@/lib/utils";
import BadgeRole from "./components/badge-role";

export function CardProject() {
  return (
    <div className="max-w-xl w-full group/card">
      
      <a
      href="./project"
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-xl mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://plus.unsplash.com/premium_photo-1664362416374-4f734db57037?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}
      >


        <div className="absolute w-full h-full top-0 left-0 transition  duration-400 bg-gradient-to-t from-neutral-950 to-white/0 group-hover/card:backdrop-blur-xs group-hover/card:overflow-hidden  "></div>
        <div className="text content h-full flex flex-col justify-end">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">Author Card</h1>

          <div className="flex flex-wrap gap-1 mt-2 relative z-10">
            <BadgeRole name={"front-end"} />
            <BadgeRole name={"back-end"} />
            <BadgeRole name={"Project Manager"} />
            <BadgeRole name={"System Analyst"} />
          </div>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Card with Author avatar, complete name and time to read - most suitable for blogs.
          </p>
        </div>
      </a>
    </div>
  );
}
const TitleComponent = ({ title, avatar }: { title: string; avatar: string }) => (
  <div className="flex items-center space-x-2">
    <img src={avatar} height="20" width="20" alt="thumbnail" className="rounded-full border-2 border-white" />
    <p>{title}</p>
  </div>
);
