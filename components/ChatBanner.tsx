import Image from "next/image";
import { Button } from "./ui/button";

export default function ChatBanner() {
  return (
    <div className="bg-gray-200 text-white p-8 flex flex-row space-x-8 items-center">
        <div className="relative">
            {/* <Image
                src="/hero-image.png"
                alt="Djerba"
                width={256}
                height={256}
                layout="responsive"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="100" zoomAndPan="magnify" viewBox="0 0 768 767.999994" height="100" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#00bf63" d="M 435.285156 534.707031 C 435.285156 563.035156 412.324219 585.996094 383.996094 585.996094 C 355.671875 585.996094 332.710938 563.035156 332.710938 534.707031 C 332.710938 506.382812 355.671875 483.417969 383.996094 483.417969 C 412.324219 483.417969 435.285156 506.382812 435.285156 534.707031 Z M 435.285156 534.707031 " fill-opacity="1" fill-rule="nonzero"/></svg>
        </div>
        <div className="flex flex-col flex-1">
            <h1 className="text-4xl font-bold text-gray-900">Online guidance assistance</h1>
            <p className="text-xl font-medium text-gray-800">Get in touch with our team now to guide you during your trip.</p>
        </div>
        <div className="">
            <Button>Chat now</Button>
        </div>
    </div>
  );
}