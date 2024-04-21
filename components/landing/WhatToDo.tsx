import Image from "next/image";
import Link from "next/link";

const whatToDo = [
  {
    title: "Activities",
    image: "banner-01.png",
    icon: "icon-002.gif",
    href: "/activities",
  },
  {
    title: "Online guide",
    image: "banner-02.jpeg",
    icon: "icon-003.gif",
    href: "/guide",
  },
  {
    title: "Maps of Djerba",
    image: "banner-05.jpeg",
    icon: "icon-001.gif",
    href: "https://www.google.com/maps/place/Djerba/@33.7735488,10.728935,11z/data=!3m1!4b1!4m6!3m5!1s0x13aabc09046e9991:0x6830d5301a39ca66!8m2!3d33.8075978!4d10.8451467!16zL20vMDI3a3R0?entry=ttu",
  },
];

export default function WhatDoTo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-7xl py-8 px-6 lg:px-8">
      {whatToDo.map((item, index) => (
        <Link href={item.href} key={index}>
          <div
            className="h-32 bg-gray-200 rounded-2xl flex items-center justify-center relative"
          >
            <Image
              src={`/${item.image}`}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl absolute"
            />
            <h2 className="text-2xl font-bold text-white absolute">
              {item.title}
            </h2>
            <Image
              src={`/${item.icon}`}
              alt={item.title}
              width={100}
              height={100}
              className="rounded-2xl absolute left-0 ml-5 h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
