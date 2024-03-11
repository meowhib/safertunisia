import Image from "next/image";
import { Button } from "./ui/button";

export interface ActivityProps {
  destination: string;
  country: string;
  description: string;
  duration: string;
  price: number;
}

export default function Activity({
  destination,
  country,
  description,
  duration,
  price,
}: ActivityProps) {
  return (
    <div className="bg-white rounded-lg shadow-md flex-col overflow-hidden">
      <Image
        className="aspect-video w-full"
        src="/hero-image.png"
        alt="hero image"
        width={600}
        height={338}
      />
      <div className="px-4 pb-4 space-y-4">
        <div className="bg-white mx-4 rounded-lg -translate-y-6 px-4 py-2 shadow-md">
          <p className="text-md leading-8 text-gray-600">{duration}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{destination}</h2>
          <p className="text-lg leading-8 text-gray-600">{country}</p>
        </div>
        <p className="text-md text-gray-600">{description}</p>
        <div className="grid grid-flow-col justify-stretch">
          <Button className="h-full">Details</Button>
          <div className="flex flex-col text-right">
            <p className="text-md leading-8 text-gray-600">From</p>
            <p className="text-2xl font-bold leading-8 text-gray-900">
              {price}$
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
