import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Pencil, Settings, Search } from "lucide-react";

export default function OrbitingSKill() {
  return (
    <div className="z-20 relative h-[500px] flex items-center justify-center overflow-hidden w-[500px]">
      <OrbitingCircles>
        <Pencil className="fill-white" />
        <Settings className="fill-white" />
        <Search className="fill-white" />
      </OrbitingCircles>
      <OrbitingCircles radius={100} reverse>
        <Settings className="fill-white" />
        <Search className="fill-white" />
      </OrbitingCircles>
    </div>
  );
}
