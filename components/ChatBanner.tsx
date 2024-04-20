import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ChatBanner() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="text-white p-8 flex flex-col md:flex-row space-y-8 md:space-x-8 items-center shadow-xl rounded-xl">
            <div className="relative">
                <Image
                    src="/icons8-wifi.gif"
                    alt="Djerba"
                    width={256}
                    height={256}
                    layout="cover"
                    className="h-32 w-32 rounded-full bg-white p-4"
                />
            </div>
            <div className="flex flex-col flex-1">
                <h1 className="text-4xl font-bold text-gray-900">Online guidance assistance</h1>
                <p className="text-xl font-medium text-gray-800">Get in touch with our team now to guide you during your trip.</p>
            </div>
            <div className="">
                <Button asChild size={"lg"}>
                    <Link href="/contact">Chat now</Link>
                </Button>
            </div>
        </div>
    </div>
  );
}