import ActivitiesFilter from "@/components/ActivitiesFilter";
import Product from "@/components/Product";
import CTA3 from "@/components/landing/CTA3";
import {
  getAllActivities,
  getAllStays,
} from "@/lib/actions/activities-actions";
import { ProductProps } from "@/lib/types";
import { BedIcon, PlaneIcon, ShieldCheckIcon, WifiIcon } from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities | Safer Tunisia",
  description: "Start you activities in Tunisia",
};

export default async function Page() {
  const productsAction = await getAllStays();

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/hero-image.png')",
        }}
        className="h-96 bg-cover bg-center flex justify-center items-center relative"
      >
        <h1 className="text-4xl font-bold text-white absolute">Our stays</h1>
      </div>
      <div className="py-12 space-y-8 px-8 md:px-24">
        {/* <div className="grid grid-cols-12 gap-4"> */}
        <div>
          {/* <div className="col-span-4">
            <h1 className="text-3xl font-bold">Filter</h1>
            <div>
              <ActivitiesFilter />
            </div>
          </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 col-span-8"> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productsAction.status === 200 && productsAction.data ? (
              productsAction.data.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  type={product.type}
                  description={product.description}
                  duration={product.duration}
                  difficulty={product.difficulty}
                  minAge={product.minAge}
                  imageUrl={product.imageUrl}
                  requirement={product.requirement}
                  priceAdults={product.priceAdults}
                  priceChildren={product.priceChildren}
                  maxAdults={product.maxAdults}
                  minAdults={product.minAdults}
                  maxChildren={product.maxChildren}
                  minChildren={product.minChildren}
                  date={product.date}
                  location={product.location}
                  destination={product.destination}
                  gallery={product.gallery}
                />
              ))
            ) : productsAction.status === 404 ? (
              <div className="text-center text-gray-600">
                <p>No activities available</p>
              </div>
            ) : (
              <div className="text-center text-gray-600">
                <p>Failed to load activities</p>
              </div>
            )}
          </div>
        </div>
        <CTA3 />
      </div>
    </div>
  );
}
