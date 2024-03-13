import Image from "next/image";

const whatToDo = [
  {
    title: "Activities",
    image: "banner-01.jpg",
    icon: "icon-001.gif",
  },
  {
    title: "Online guide",
    image: "banner-02.jpg",
    icon: "icon-002.gif",
  },
  {
    title: "Maps of Djerba",
    image: "banner-05.jpg",
    icon: "icon-003.gif",
  },
];

export default function WhatDoTo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-7xl py-8 px-6 lg:px-8">
      {whatToDo.map((item, index) => (
        <div
          key={index}
          className="h-32 bg-gray-200 rounded-lg flex items-center justify-center relative"
        >
          <Image
            src={`/${item.image}`}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg absolute"
          />
          <h2 className="text-2xl font-bold text-white absolute">
            {item.title}
          </h2>
          <Image
            src={`/${item.icon}`}
            alt={item.title}
            width={100}
            height={100}
            className="rounded-lg absolute left-0 ml-5"
          />
        </div>
      ))}
    </div>
  );
}
