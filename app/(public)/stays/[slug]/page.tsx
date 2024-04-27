import ActivityBookingForm from "@/components/ActivityBookingForm";
import prisma from "@/lib/prisma";
import { Clock, Pin } from "lucide-react";

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
    <div className="w-full grid mx-auto max-w-7xl px-6 lg:px-8 ">
      {/* Image gallery section */}
      <div className="grid grid-cols-4 gap-x-4 my-8">
        <div className="aspect-video h-42 rounded-lg bg-gray-300"></div>
        <div className="aspect-video h-42 rounded-lg bg-gray-300"></div>
        <div className="aspect-video h-42 rounded-lg bg-gray-300"></div>
        <div className="aspect-video h-42 rounded-lg bg-gray-300"></div>
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
          <h1 className="text-gray-900 text-3xl font-bold mb-4">
            Enjoy the adventure
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            dui laoreet, pulvinar quam eget, placerat est. Sed laoreet lacinia
            augue, sit amet placerat elit placerat at. Donec cursus metus felis,
            facilisis venenatis leo imperdiet vel. Nunc accumsan risus massa,
            lacinia convallis velit congue nec. Mauris pharetra venenatis diam,
            id posuere tellus mollis ut. Mauris sed augue vel metus mattis
            lacinia faucibus ac elit. Nulla orci diam, vestibulum vel lobortis
            a, blandit vel lorem. Donec finibus nisi quam, ut convallis odio
            finibus ac.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Maecenas porttitor nibh et felis posuere fermentum. Maecenas ut
            dapibus ipsum. Etiam accumsan blandit dolor. Sed lacinia ex sit amet
            consectetur lobortis. Pellentesque placerat pharetra lectus. Nullam
            sapien orci, varius quis purus sed, feugiat mollis est. Ut sed
            tristique odio. Aliquam est est, imperdiet vel elit ac, lobortis
            tincidunt ipsum. Phasellus auctor mauris a nisi finibus, vitae
            molestie turpis posuere. Aenean et vestibulum nisi. In vitae finibus
            sem. Maecenas commodo condimentum egestas. Cras id risus neque. Ut
            aliquam tincidunt faucibus. Maecenas volutpat risus at lorem pretium
            placerat. Duis sed metus tincidunt massa malesuada molestie.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            In vitae nibh justo. Phasellus id varius neque, at egestas tellus.
            Aliquam quis lacinia ligula. Vivamus eu vehicula enim, vitae blandit
            ligula. Donec id erat nunc. Donec turpis enim, laoreet vitae tempus
            non, malesuada a dolor. Aenean eu vulputate mauris. Proin nec arcu
            eros.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Fusce at ultrices justo. Fusce velit leo, sodales eu erat vitae,
            accumsan malesuada arcu. Vestibulum luctus, leo sed consequat
            consectetur, ipsum enim congue lectus, ac consequat quam sem vitae
            tellus. Cras at mi tincidunt, fermentum nibh eu, consectetur elit.
            Nam mattis velit ut dui lacinia consequat. Integer accumsan nulla
            quis ligula posuere tincidunt nec in tortor. Fusce lobortis elit a
            pretium eleifend. Nulla facilisi. Aenean ut dolor mauris.
            Pellentesque suscipit non lorem in sollicitudin. Cras tellus metus,
            finibus in tortor quis, accumsan sodales eros.
          </p>
        </div>
        {/* Form side */}
        <div className="bg-gray-300">
          <ActivityBookingForm />
        </div>
      </div>
    </div>
  );
}
