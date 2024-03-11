import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <div
      className="bg-gray-800 py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('/hero-image.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-8">
        <div>
          <h3 className="text-sm font-semibold leading-6 text-gray-300">
            Let&apos;s Adventure
          </h3>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Discover Djerba & South Tunisia
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Free online guide, Booking activities, Digital nomads guide,...
          </p>
        </div>
        <SearchForm />
      </div>
    </div>
  );
}
