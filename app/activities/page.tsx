import CTA3 from "@/components/landing/CTA3";
import { BedIcon, PlaneIcon, ShieldCheckIcon, WifiIcon } from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities | Safer Tunisia",
  description: "Start you activities in Tunisia",
};

export default function Page() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/hero-image.png')",
        }}
        className="h-96 bg-cover bg-center flex justify-center items-center relative"
      >
        <h1 className="text-4xl font-bold text-white absolute">Our packages</h1>
      </div>
      <div className="py-12 space-y-8 px-8 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
        <CTA3 />
      </div>
    </div>
  );
}
