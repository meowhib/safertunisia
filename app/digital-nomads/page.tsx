import CTA3 from "@/components/landing/CTA3";
import { BedIcon, PlaneIcon, ShieldCheckIcon, WifiIcon } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";

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
          Djerba Digital Nomad Guide
          </h1>
          <p className="text-sm md:text-lg text-gray-600">
          Connection, co-working spaces & cafés, cost of living, accommodation, weather, lifestyle, activities (link to page), visas
          </p>
          <p>
          Djerba is an up and coming location for digital nomads, with a growing community, active co-working spaces, a laid-back and affordable lifestyle, and a range of activities and beaches to enjoy in the sun.
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Internet
          </h1>
          <p>Data mobile 50mo/s</p>
          <p>Fiber 100G/s</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Coworking Spaces & Cafés</h1>
          <p>Cozi-Coworking space 100G/s</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Cost of Living</h1>
          <p>Djerba has a relatively low cost of living, with affordable accommodations, food, and activities, allowing nomads to live a comfortable life style while enjoying the island&apos;s charm.</p>
          <p>Below are the costs of basic amenities:</p>
          <p>Meal, Inexpensive Restaurant: TND 7.30 ($2.64) </p>
          <p>Meal, Luxury Restaurant : TND 50</p>
          <p>Beer (domestic): (0.5 liter bottle) TND 3.00 ($1.08)</p>
          <p>Coffee (regular): TND 2 ($0.9) </p>
          <p>Bread: (500g): TND 0.65 ($0.23) </p>
          <p>Water (1.5 liter bottle): TND 0.70 ($0.25)</p>

          <p>Apartment in City Centre (1 bedroom, per month): TND 600.00 ($217.28)</p>
          <p>Basic Utilities (monthly): TND 180.00 ($65.13)</p>
          <p>Internet (monthly, 10 Mbps): TND 35.00 ($12.67) </p>
          <p>Gym Membership (monthly): TND 60.00 ($21.73) </p>
          <p>Hotel (low budget)</p>
          <p>Hostel (luxury)</p>

          <p>Taxi: </p>
          <p>Scooter rental:</p>
          <p>One-way Ticket (local transport): TND 0.68 ($0.25)</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Visas & Logistics</h1>
          <p>For most nationalities, Tunisia offers a visa-free stay of 90 days. This can be easily renewed by leaving the country for a simple border run.</p>
          <p>Tunisia is also well connected to Europe, with a variety of low-cost direct flights to France, Germany, and other EU destinations.</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Accommodations</h1>
          <p>Djerba offers different types of accommodation such as Hostels, Guest Houses, Hotels & Apartments.</p>
          <p>Start from 18 dollars a day</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Weather</h1>
          <p>Djerba has a mild desert climate, with an average temperature of 23° degrees celsius. The warmest months are June, July, and August with an average high from 30 - 34° and lows ranging from 20 - 24°.</p>
          <p>The coldest months are November, December, and January with highs of 17 - 18° and lows of 9 - 11°. </p>
          <p>The sea temperature ranges from 15° in the winter to 28° in the summer.</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Culture & Lifestyle</h1>
          <p>Djerba has an island culture, with a laid-back attitude and friendly people.</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Activities</h1>
          <p>Djerba offers a range of activities, whether you&apos;re looking to relax with a sunset beach picnic, learn how to kite surf, take a mid-afternoon kayak break, or head out on the weekend to explore the sites of Southern Tunisia.</p>
          <p>A full overview of activities is available here: link </p>
          <p>Reference guides:  </p>
          <ul className="flex flex-col text-blue-600">
          <Link href="https://nomadlist.com/">https://nomadlist.com/ </Link>
          <Link href="https://www.psimonmyway.com/koh-phangan-digital-nomad/">https://www.psimonmyway.com/koh-phangan-digital-nomad/ </Link>
          <Link href="https://digitalnomads.world/city-guide/ko-pha-ngan/#Costs">https://digitalnomads.world/city-guide/ko-pha-ngan/#Costs</Link>
          <Link href="https://thewayfaringfoodie.com/digital-nomad-in-canggu/ ">https://thewayfaringfoodie.com/digital-nomad-in-canggu/ </Link>
          <Link href="https://www.thingsnomadsdo.com/blog/digital-nomads-in-penang-malaysia">https://www.thingsnomadsdo.com/blog/digital-nomads-in-penang-malaysia </Link>
          </ul>
        </div>
        <CTA3 />
      </div>
    </div>
  );
}
