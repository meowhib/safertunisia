import Link from "next/link";
import { Button } from "./ui/button";
import { ProductProps } from "@/lib/types";
import { Badge } from "./ui/badge";
import { SignalHigh, SignalLow, SignalMedium } from "lucide-react";

export default function Product({
  id,
  name,
  type,
  description,
  duration,
  difficulty,
  minAge,
  imageUrl,
  requirements,
  price,
  date,
  location,
  gallery,
}: ProductProps) {
  return (
    <div className="bg-white rounded-xl shadow-xl flex-col overflow-hidden">
      <div className="">
        <Badge className="m-4 absolute" variant={"secondary"}>
          {
            type === "trip" ? "Trip" : type === "activity" ? "Activity" : "Event"
          }
        </Badge>
        <img
          className="aspect-video object-cover"
          src={imageUrl}
          alt="hero image"
          width={600}
          height={338}
        />
      </div>
      <div className="px-4 pb-4 space-y-4">
        <div className="bg-white mx-4 rounded-xl -translate-y-6 px-4 py-2 shadow-md">
          <h1 className="text-xl font-semibold leading-8 text-gray-800">Duration: {duration}</h1>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <p className="text-lg leading-8 text-gray-600">{location}</p>
          <p className="text-lg leading-8 text-gray-600 flex">
            {
              difficulty === "Easy" ? <SignalLow size={24} /> : difficulty === "Medium" ? <SignalMedium size={24} /> : <SignalHigh size={24} />
            }
            {difficulty}
          </p>
        </div>
        <p className="text-md text-gray-600">{description}</p>
        <div className="grid grid-flow-col justify-stretch">
          <Button className="h-full">
            <Link href={`/product/${id}`}>
              Details
            </Link>
          </Button>
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
