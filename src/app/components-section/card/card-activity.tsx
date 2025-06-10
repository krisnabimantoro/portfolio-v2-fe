import Image from "next/image";

export default function CardActivity() {
  return (
    <div className="h-48 w-full bg-neutral-900 rounded-xl flex flex-col gap-2 justify-center p-3">
      <div className=" w-auto h-full rounded-sm bg-neutral-800 p-2 flex items-center flex-row">
        <Image src="/card-active/logo_umm.png" alt="Universitas Muhammadiyah Malang" width={50} height={100} />
        <div className="flex flex-col items-start justify-center ml-2">
          <p className="text-white font-semibold text-lg">Undergraduate - Semester 6</p>
          <p className="text-sm font-base text-neutral-400">Computer Science - Universitas Muhammadiyah Malang</p>
        </div>
      </div>
      <div className=" w-auto h-full rounded-sm bg-neutral-800 p-2 flex items-center flex-row">
        <Image src="/card-active/ilab.png" alt="ilab" width={50} height={100} className="p-0.5" />
        <div className="flex flex-col items-start justify-center ml-2">
          <p className="text-white font-semibold text-lg">Lead of System Information</p>
          <p className="text-sm font-base text-neutral-400">Infotech - Assistant Laboratory Informatics</p>
        </div>
      </div>
    </div>
  );
}
