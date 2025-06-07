import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function BadgeRole({ name }: { name: string }) {
  return (
    <ShimmerButton className="shadow-2xl max-w-40">
      <span className="whitespace-pre-wrap text-center  font-normal  leading-none tracking-tight text-neutral-200 dark:from-white dark:to-slate-900/10 text-sm">
        {name}
      </span>
    </ShimmerButton>
  );
}
