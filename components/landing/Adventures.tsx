import Activity from "../Activity";
import { ActivityProps } from "../Activity";

export default function Adventures() {
  const activities: ActivityProps[] = [
    {
      destination: "Mountain Hiking",
      country: "Nepal",
      description: "Hike through the beautiful Himalayas",
      duration: "7 days",
      price: 1500,
    },
    {
      destination: "Beach Yoga",
      country: "Thailand",
      description: "Relax and rejuvenate on the beaches of Thailand",
      duration: "10 days",
      price: 2000,
    },
    {
      destination: "Desert Safari",
      country: "Morocco",
      description: "Experience the Sahara desert on a camel",
      duration: "5 days",
      price: 1000,
    },
    {
      destination: "City Tour",
      country: "Italy",
      description: "Explore the ancient ruins of Rome",
      duration: "3 days",
      price: 800,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-8 px-6 lg:px-8 space-y-8">
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Find your adventures!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {activities.map((activity, index) => (
          <Activity key={index} {...activity} />
        ))}
      </div>
    </div>
  );
}
