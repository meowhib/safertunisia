import UpdateActivityForm from "@/components/admin/activities/EditActivityForm";
import getActivity from "@/lib/actions/activities-actions";

export default async function ActivityFormPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { status, data } = await getActivity({ id: slug });

  if (status !== 200 || !data) {
    return <div>Activity not found</div>;
  }

  const {
    id,
    name,
    type,
    description,
    content,
    duration,
    difficulty,
    minAge,
    imageUrl,
    requirement,
    priceAdults,
    priceChildren,
    maxAdults,
    maxChildren,
    minAdults,
    minChildren,
    date,
    location,
    destination,
    gallery,
  } = data;

  const galleryUrls = gallery.map((url: string) => ({ value: url }));

  return (
    <div className="py-8 w-full bg-gray-100">
      <UpdateActivityForm
        id={id}
        name={name}
        type={type}
        description={description}
        content={content}
        duration={duration}
        difficulty={difficulty}
        minAge={minAge}
        imageUrl={imageUrl || ""}
        requirement={requirement || ""}
        priceAdults={priceAdults}
        priceChildren={priceChildren}
        maxAdults={maxAdults}
        maxChildren={maxChildren}
        minAdults={minAdults}
        minChildren={minChildren}
        date={date || ""}
        location={location || ""}
        destination={destination || ""}
        gallery={galleryUrls}
      />
    </div>
  );
}
