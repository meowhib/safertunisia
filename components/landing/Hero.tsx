import { cn } from "@/lib/utils";
import SearchForm from "./SearchForm";
import { reenieBeanie } from "../ui/fonts";

export default function Hero() {
  return (
    <div
      className="bg-gray-800 py-12 sm:py-16 lg:py-20 bg-center"
      style={{
        backgroundImage: "url('/hero-image.png')",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-8">
        <div>
          <h3
            className={cn(
              "text-4xl font-extrabold leading-6 text-primary drop-shadow-md",
              reenieBeanie.className
            )}
          >
            Let&apos;s Adventure
          </h3>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md">
            Discover Djerba & South Tunisia
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100 drop-shadow-md">
            Free online guide, Booking activities, Digital nomads guide,...
          </p>
        </div>
        <SearchForm />
      </div>
    </div>
  );
}
