import ActivityBookingForm from "@/components/ActivityBookingForm";
import prisma from "@/lib/prisma";
import { Clock, Pin } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ActivityPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = await prisma.products.findUnique({
    where: {
      id: slug,
    },
  });

  if (!product) {
    return <p>Product is not found</p>;
  }

  return (
    <div className="w-full grid mx-auto max-w-7xl px-6 lg:px-8">
      {/* Image gallery section */}
      <div className="grid grid-cols-4 gap-x-4 my-8">
        {product.gallery.map((image) => (
          <img
            key={image}
            src={image}
            alt="Gallery image"
            className="w-full rounded-2xl bg-gray-100 object-cover aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]"
          />
        ))}
      </div>
      {/* Location and duration section */}
      <div className="flex flex-row grid grid-cols-8 justify-between">
        <div className="flex flex-col col-span-4">
          <h1 className="text-gray-900 text-3xl font-bold">
            {product.destination}
          </h1>
          <p className="text-gray-700 text-lg flex items-center">
            <Pin size={16} className="inline-block mr-2" />
            {product.location}
          </p>
        </div>
        <div className="flex flex-row space-x-8 col-span-4">
          {/* Duration cards */}
          <div className="flex flex-row items-center space-x-6">
            <div className="aspect-square h-12 w-12 flex items-center justify-center bg-primary rounded-full">
              <Clock className="text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 text-lg">Difficulty</p>
              <h3 className="text-gray-900 text-xl font-bold">
                {product.difficulty}
              </h3>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-6">
            <div className="aspect-square h-12 w-12 flex items-center justify-center bg-primary rounded-full">
              <Clock className="text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 text-lg">Min Age</p>
              <h3 className="text-gray-900 text-xl font-bold">
                {product.minAge}
              </h3>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-6">
            <div className="aspect-square h-12 w-12 flex items-center justify-center bg-primary rounded-full">
              <Clock className="text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 text-lg">Duration</p>
              <h3 className="text-gray-900 text-xl font-bold">
                {product.duration}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Description and booking form section */}
      <div className="flex flex-row space-x-8 my-8">
        {/* Description in markdown*/}
        <div className="flex flex-col flex-1">
          <MDXRemote source={product.content} />
        </div>
        {/* Form side */}
        <div className="bg-gray-300">
          <ActivityBookingForm />
        </div>
      </div>
    </div>
  );
}
