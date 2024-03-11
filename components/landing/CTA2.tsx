import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA2() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <Image
        src="/hero-image.png"
        alt="hero image safe tunisia"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        layout="fill"
      />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
          Start your life in Djerba
        </h2>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
          In Djerba as Digial Nomad ?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-100">
          Accomandation, Co-working spaces, Transports, Activities, and more...
        </p>
        <Link href="/contact">
          <Button className="mt-8">Contact us</Button>
        </Link>
      </div>
    </div>
  );
}
