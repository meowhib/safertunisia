import ActivityBookingForm from "@/components/ActivityBookingForm";
import prisma from "@/lib/prisma";
import { Clock, Pin } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital nomads | Safer Tunisia",
  description: "Live your nomad life in Tunisia",
};

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

  const components = {
    h1: (props: any) => (
      <h1 {...props} className="text-4xl font-bold mt-8">
        {props.children}
      </h1>
    ),
    h2: (props: any) => (
      <h2 {...props} className="text-3xl font-bold mt-8">
        {props.children}
      </h2>
    ),
    h3: (props: any) => (
      <h3 {...props} className="text-2xl font-bold mt-8">
        {props.children}
      </h3>
    ),
    h4: (props: any) => (
      <h4 {...props} className="text-xl font-bold mt-8">
        {props.children}
      </h4>
    ),
    h5: (props: any) => (
      <h5 {...props} className="text-lg font-bold mt-8">
        {props.children}
      </h5>
    ),
    h6: (props: any) => (
      <h6 {...props} className="text-base font-bold mt-8">
        {props.children}
      </h6>
    ),
    p: (props: any) => (
      <p {...props} className="text-lg leading-8 text-gray-800 mt-4">
        {props.children}
      </p>
    ),
    a: (props: any) => (
      <a {...props} className="text-blue-600 hover:underline">
        {props.children}
      </a>
    ),
    ul: (props: any) => (
      <ul {...props} className="list-disc list-inside list-disc mt-4">
        {props.children}
      </ul>
    ),
    ol: (props: any) => (
      <ol {...props} className="list-decimal list-inside list-decimal mt-4">
        {props.children}
      </ol>
    ),
    li: (props: any) => (
      <li {...props} className="text-lg leading-8 list-inside text-gray-800">
        {props.children}
      </li>
    ),
    blockquote: (props: any) => (
      <blockquote
        {...props}
        className="border-l-4 border-gray-200 pl-4 italic my-8"
      >
        {props.children}
      </blockquote>
    ),
    img: (props: any) => (
      <img
        {...props}
        className="my-8 w-full rounded-2xl bg-gray-100 object-cover aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]"
      />
    ),
  };

  return (
    <div className="w-full grid mx-auto max-w-7xl px-6 lg:px-8">
      {/* Image gallery section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 my-12">
        {product.gallery.map((image) => (
          <Image
            key={image}
            src={image}
            alt="Gallery image"
            className="w-full rounded-2xl object-cover aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]"
            width={720}
            height={405}
          />
        ))}
      </div>
      {/* Location and duration section */}
      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row ">
        <div className="flex flex-col">
          <h1 className="text-gray-900 text-3xl font-bold">
            {product.destination}
          </h1>
          <p className="text-gray-700 text-lg flex items-center">
            <Pin size={16} className="inline-block mr-2" />
            {product.location}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-8 md:ml-auto">
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
      <div className="flex flex-col md:flex-row space-x-8 my-8">
        {/* Description in markdown*/}
        <div className="flex flex-col flex-1">
          <MDXRemote source={product.content} components={components} />
        </div>
        {/* Form side */}
        <div className="sticky">
          <ActivityBookingForm product={product} />
        </div>
      </div>
    </div>
  );
}
