import Product from "../Product";
import { ProductProps } from "@/lib/types";
import ActivitiesCarousel from "./ActivitiesCarousel";
import { getAllActivities } from "@/lib/actions/activities-actions";

export default async function Adventures() {
  const {status, data}: {status: Number, data: ProductProps[] | null} = await getAllActivities();

  return (
    <div className="mx-auto max-w-7xl py-32 px-6 lg:px-8 space-y-12">
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Find your adventure!
      </h2>
      {
        data ? (
          <ActivitiesCarousel activities={data} />
        ) : (
          <ActivitiesCarousel activities={[]} />
        )
      }
    </div>
  );
}
