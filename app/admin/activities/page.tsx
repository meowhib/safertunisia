import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { getAllActivities } from "@/lib/actions/activities-actions";
import Link from "next/link";

export default async function ActivitiesAdminPage() {
  const { status, data: activities } = await getAllActivities();

  if (status === 404 || !activities || !activities.length) {
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Activities</h1>
        </div>
        <div
          className="flex flex-col flex-1 items-center justify-center rounded-lg"
          x-chunk="dashboard-02-chunk-1"
        >
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            No activities found
          </h3>
          <p className="leading-7">How about adding a new activity?</p>
          <Button asChild variant="default" className="mt-6">
            <Link href="/admin/activities/new">Add new activity</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Activities</h1>
      </div>
      <div className="flex flex-1 rounded-lg" x-chunk="dashboard-02-chunk-1">
        {activities.map((activity) => (
          <Product key={activity.id} {...activity} />
        ))}
      </div>
    </main>
  );
}
