import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  const sponsors = [
    {
      name: "Sponsor 1",
      image: "/sponsor1.png",
      href: "#",
    },
    {
      name: "Sponsor 2",
      image: "/sponsor1.png",
      href: "#",
    },
    {
      name: "Sponsor 3",
      image: "/sponsor1.png",
      href: "#",
    },
    {
      name: "Sponsor 4",
      image: "/sponsor1.png",
      href: "#",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our sponsors
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            This is possible thanks to our sponsors
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-32">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <Link href={sponsor.href}>
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={300}
                  height={169}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
