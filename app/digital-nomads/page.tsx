import CTA3 from "@/components/landing/CTA3";
import { BedIcon, PlaneIcon, ShieldCheckIcon, WifiIcon } from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital nomads | Safer Tunisia",
  description: "Live your nomad life in Tunisia",
};

const perks = [
  {
    title: "Good",
    description: "Stay & Food",
    icon: BedIcon,
  },
  {
    title: "Good",
    description: "Internet & Co-working",
    icon: WifiIcon,
  },
  {
    title: "Good",
    description: "Life & Activities",
    icon: PlaneIcon,
  },
  {
    title: "Friendly",
    description: "Safety & Health",
    icon: ShieldCheckIcon,
  },
];

export default function Page() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/hero-image.png')",
        }}
        className="h-96 bg-cover bg-center flex justify-center items-center relative"
      >
        <h1 className="text-4xl font-bold text-white absolute">Djerba</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-8 -translate-y-8 drop-shadow-lg text-center">
        {perks.map((perk, index) => (
          <div
            key={index}
            className="rounded-2xl flex flex-col items-center content-normal"
          >
            <div className="bg-primary w-10 h-10 md:w-16 md:h-16 aspect-square rounded-full flex justify-center items-center">
              <perk.icon className="text-white" />
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-lg">{perk.description}</p>
              <h2 className="text-2xl font-bold">{perk.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="py-12 space-y-8 px-8 md:px-24">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Enjoy a pleasant climate all year round
          </h1>
          <p className="text-sm md:text-lg text-gray-600">
            Djerba is a beautiful island located in the Gulf of Gabes, off the
            coast of Tunisia. It is the largest island in North Africa, and the
            fifth largest in the Mediterranean Sea. The island is known for its
            beautiful beaches and pleasant climate all year round. The island is
            also home to a number of historic sites, including the El Ghriba
            Synagogue, which is one of the oldest synagogues in the world.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Enjoy a pleasant climate all year round
          </h1>
          <p className="text-lg text-gray-600">
            Djerba is a beautiful island located in the Gulf of Gabes, off the
            coast of Tunisia. It is the largest island in North Africa, and the
            fifth largest in the Mediterranean Sea. The island is known for its
            beautiful beaches and pleasant climate all year round. The island is
            also home to a number of historic sites, including the El Ghriba
            Synagogue, which is one of the oldest synagogues in the world.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Enjoy a pleasant climate all year round
          </h1>
          <p className="text-lg text-gray-600">
            Djerba is a beautiful island located in the Gulf of Gabes, off the
            coast of Tunisia. It is the largest island in North Africa, and the
            fifth largest in the Mediterranean Sea. The island is known for its
            beautiful beaches and pleasant climate all year round. The island is
            also home to a number of historic sites, including the El Ghriba
            Synagogue, which is one of the oldest synagogues in the world.
          </p>
        </div>
        <CTA3 />
      </div>
    </div>
  );
}
