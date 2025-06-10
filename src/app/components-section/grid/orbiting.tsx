"use client";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Pencil, Settings, Search } from "lucide-react";
import Image from "next/image";
export default function OrbitingSKill() {
  return (
    <div className="z-20 relative h-[400px] flex items-center justify-center overflow-hidden w-[400px] brightness-0 invert hover:brightness-100 hover:invert-0 after:brightness-100 after:invert-0 transition duration-500 ">
      <OrbitingCircles speed={2}>
        <Image src="/skills/firebase.png" className="" alt="Universitas Muhammadiyah Malang" width={175} height={175} />
        <Image src="/skills/flutter.png" className="" alt="Universitas Muhammadiyah Malang" width={100} height={100} />
        <Image src="/skills/postgree.png" className="" alt="Universitas Muhammadiyah Malang" width={205} height={275} />
      </OrbitingCircles>
      <OrbitingCircles radius={50} reverse speed={3}>
        <Image src="/skills/nextjs.png" className="" alt="Universitas Muhammadiyah Malang" width={105} height={25} />
        <Image src="/skills/laravel.png" className="" alt="Universitas Muhammadiyah Malang" width={105} height={25} />
        <Image src="/skills/express.png" className="" alt="Universitas Muhammadiyah Malang" width={105} height={105} />
      </OrbitingCircles>
      <OrbitingCircles radius={100} speed={1}>
        <Image src="/skills/ts.png" className="" alt="Universitas Muhammadiyah Malang" width={25} height={25} />
        <Image src="/skills/java.png" className="" alt="Universitas Muhammadiyah Malang" width={25} height={25} />
        <Image src="/skills/docker.png" className="" alt="Universitas Muhammadiyah Malang" width={3005} height={2050} />
      </OrbitingCircles>
    </div>
  );
}
