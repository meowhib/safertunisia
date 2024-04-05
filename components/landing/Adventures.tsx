import Product from "../Product";
import { ProductProps } from "@/lib/types";
import ActivitiesCarousel from "./ActivitiesCarousel";

export default function Adventures() {
  const activities: ProductProps[] = [
    {
      id: "1",
      name: "Hiking",
      type: "Outdoor",
      description: "Hiking in the mountains",
      duration: "1 day",
      difficulty: "Medium",
      minAge: 12,
      imageUrl: "/hero-image.png",
      requirements: "Good shoes",
      price: 100,
      date: "2022-10-10",
      location: "Mountain",
      gallery: ["/hero-image.png"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-32 px-6 lg:px-8 space-y-12">
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Find your adventures!
      </h2>
      <ActivitiesCarousel activities={activities} />
    </div>
  );
}
