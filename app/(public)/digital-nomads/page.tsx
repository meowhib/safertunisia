import ChatBanner from "@/components/ChatBanner";
import CTA3 from "@/components/landing/CTA3";
import { BedIcon, PlaneIcon, ShieldCheckIcon, WifiIcon } from "lucide-react";
import Link from "next/link";
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
          backgroundImage: "url('/digitalnomad_banner.png')",
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
        <div className="space-y-4 mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Djerba Digital Nomad Guide
          </h2>

          <p className="text-sm md:text-lg text-gray-800">
            Connection, co-working spaces & cafés, cost of living,
            accommodation, weather, lifestyle, activities (link to page), visas
          </p>

          <p className="text-sm md:text-lg text-gray-800">
            Djerba is an up and coming location for digital nomads, with a
            growing community, active co-working spaces, a laid-back and
            affordable lifestyle, and a range of activities and beaches to enjoy
            in the sun.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Internet
          </h2>

          <p className="text-sm md:text-lg text-gray-800">
            Data mobile <strong>50mo/s</strong> Fiber <strong>100G/s</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Coworking space <strong>100G/s</strong>
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Cost of Living
          </h2>

          <p className="text-sm md:text-lg text-gray-800">
            Djerba has a relatively low cost of living, with affordable
            accommodations, food, and activities, allowing nomads to live a
            comfortable lifestyle while enjoying the island&apos;s charm.
          </p>

          <p className="text-sm md:text-lg text-gray-800">
            Below are the costs of basic amenities:
          </p>

          <p className="text-sm md:text-lg text-gray-800">
            Meal, Inexpensive Restaurant: <strong>TND 7.30 ($2.64)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Meal, Luxury Restaurant : <strong>TND 50</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Beer (domestic): (0.5 liter bottle){" "}
            <strong>TND 3.00 ($1.08)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Coffee (regular): <strong>TND 2 ($0.9)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Bread: (500g): <strong>TND 0.65 ($0.23)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Water (1.5 liter bottle): <strong>TND 0.70 ($0.25)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Apartment in City Centre (1 bedroom, per month):{" "}
            <strong>TND 600.00 ($217.28)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Basic Utilities (monthly): <strong>TND 180.00 ($65.13)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Internet (monthly, 20 Gbps): <strong>TND 35.00 ($12.67)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Gym Membership (monthly): <strong>TND 60.00 ($21.73)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Hostel : <strong>TND 60.00 ($21.73)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Taxi: <strong>TND 0.7 ($0.25 / 1 Km)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            Scooter rental: <strong>TND 80 (25,29)</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-800">
            One-way Ticket (local transport): <strong>TND 0.68 ($0.25)</strong>
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Visas & Logistics
          </h2>

          <p className="text-sm md:text-lg text-gray-800">
            For most nationalities, Tunisia offers a visa-free stay of 90 days.
            This can be easily renewed by leaving the country for a simple
            border run.
          </p>

          <p className="text-sm md:text-lg text-gray-800">
            Tunisia is also well connected to Europe, with a variety of low-cost
            direct flights to France, Germany, and other EU destinations.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Accommodations
          </h2>

          <p className="text-sm md:text-lg text-gray-800">
            Djerba offers different types of accommodation such as Hostels,
            Guest Houses, Hotels & Apartments. Start from 18 dollars a day
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Weather
          </h2>

          <p className="text-sm md:text-lg text-gray-800">
            Djerba has a mild desert climate, with an average temperature of{" "}
            <strong>23°</strong> degrees celsius. The warmest months are June,
            July, and August with an average high from{" "}
            <strong>30° - 34°</strong> and lows ranging from{" "}
            <strong>20° - 24°.</strong>
          </p>

          <p className="text-sm md:text-lg text-gray-800">
            The coldest months are November, December, and January with highs of{" "}
            <strong>17° - 18°</strong> and lows of <strong>9° - 11°</strong>.
          </p>

          <p className="text-sm md:text-lg text-gray-800">
            The sea temperature ranges from <strong>15°</strong> in the winter
            to <strong>28°</strong> in the summer.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Culture & Lifestyle
          </h2>

          <p className="text-sm md:text-lg text-gray-800">
            Djerba has an island culture, with a laid-back attitude and friendly
            people.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Activities
          </h2>

          <p className="text-sm md:text-lg text-gray-800">
            Djerba offers a range of activities, whether you&apos;re looking to
            relax with a sunset beach picnic, learn how to kite surf, take a
            mid-afternoon kayak break, or head out on the weekend to explore the
            sites of Southern Tunisia.
          </p>

          <p className="text-sm md:text-lg text-gray-800">
            A full overview of activities is available here:{" "}
            <Link className="text-blue-700 underline" href={"/activities"}>
              activities page
            </Link>
          </p>
        </div>
        <ChatBanner />
      </div>
    </div>
  );
}
