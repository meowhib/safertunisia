import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import {
  getAllActivities,
  getAllStays,
} from "@/lib/actions/activities-actions";
import { Pen } from "lucide-react";
import Link from "next/link";

export default async function ActivitiesAdminPage() {
  const { status, data: stays } = await getAllStays();

  if (status === 404 || !stays || !stays.length) {
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Stays</h1>
        </div>
        <div
          className="flex flex-col flex-1 items-center justify-center rounded-lg"
          x-chunk="dashboard-02-chunk-1"
        >
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            No stays found
          </h3>
          <p className="leading-7">How about adding a new stay?</p>
          <Button asChild variant="default" className="mt-6">
            <Link href="/admin/activities/new">Add new stay</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Stays</h1>
      </div>
      <div
        className="flex rounded-lg grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4"
        x-chunk="dashboard-02-chunk-1"
      >
        {stays.map((stay) => (
          <div key={stay.id} className="flex flex-col space-y-4">
            <Product {...stay} />
            <Button variant={"secondary"} asChild>
              <Link href={`/admin/activities/edit/${stay.id}`}>
                <Pen className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
