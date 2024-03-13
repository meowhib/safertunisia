"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Activity, { ActivityProps } from "../Activity";

export default function ActivitiesCarousel({
  activities,
}: {
  activities: ActivityProps[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
      setApi={setApi}
    >
      <CarouselContent>
        {activities.map((activity, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Activity {...activity} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <div className="py-6 text-center text-sm text-muted-foreground">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={`inline-block w-2 h-2 mx-1 rounded-full cursor-pointer ${
              i === current - 1 ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </Carousel>
  );
}
