import { Clock, Pin } from "lucide-react";

export default function ActivityPage(){
    return (
        <div className="w-full grid max-w-7xl px-6 lg:px-8 ">
          <div className="grid grid-cols-4 gap-x-4 my-8">
            <div className="aspect-video h-42 rounded-lg bg-gray-300"></div>
            <div className="aspect-video h-42 rounded-lg bg-gray-300"></div>
            <div className="aspect-video h-42 rounded-lg bg-gray-300"></div>
            <div className="aspect-video h-42 rounded-lg bg-gray-300"></div>
          </div>
          <div className="flex flex-row grid grid-cols-8 justify-between">
              <div className="flex flex-col col-span-4">
                  <h1 className="text-gray-900 text-3xl font-bold">Location</h1>
                  <p className="text-gray-700 text-lg flex items-center">
                      <Pin size={16} className="inline-block mr-2" />
                      Location
                  </p>
              </div>
              <div className="flex flex-row space-x-8 col-span-4">
              <div className="flex flex-row items-center space-x-6">
                  <div className="aspect-square h-12 w-12 flex items-center justify-center bg-primary rounded-full">
                      <Clock className="text-white" />
                  </div>
                  <div className="flex flex-col">
                      <p className="text-gray-700 text-lg">
                          Duration
                      </p>
                      <h3 className="text-gray-900 text-xl font-bold">Location</h3>
                  </div>
              </div>
              <div className="flex flex-row items-center space-x-6">
                  <div className="aspect-square h-12 w-12 flex items-center justify-center bg-primary rounded-full">
                      <Clock className="text-white" />
                  </div>
                  <div className="flex flex-col">
                      <p className="text-gray-700 text-lg">
                          Duration
                      </p>
                      <h3 className="text-gray-900 text-xl font-bold">Location</h3>
                  </div>
              </div>
              <div className="flex flex-row items-center space-x-6">
                  <div className="aspect-square h-12 w-12 flex items-center justify-center bg-primary rounded-full">
                      <Clock className="text-white" />
                  </div>
                  <div className="flex flex-col">
                      <p className="text-gray-700 text-lg">
                          Duration
                      </p>
                      <h3 className="text-gray-900 text-xl font-bold">Location</h3>
                  </div>
              </div>
              </div>
          </div>
          <div className="flex flex-row space-x-8 my-8">
            {/* Description and map side */}
            <div className="flex flex-col flex-1">
              <h1 className="text-gray-900 text-3xl font-bold mb-4">Enjoy the adventure</h1>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel leo ac lacus varius aliquet. Mauris ullamcorper sapien vel augue pharetra, quis vulputate elit tempor. Suspendisse id fringilla risus. In eu interdum odio, vel bibendum dui. Nulla consectetur consequat eros, at tristique lacus rutrum vel.</p>
            </div>
            {/* Form side */}
            <div className="">
              <form className="flex flex-col">
                <h2 className="text-gray-900 text-2xl">Book now</h2>
                <div className="flex flex-col space-y-4">
                  <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded-lg" />
                  <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded-lg" />
                  <input type="text" placeholder="Phone number" className="border border-gray-300 p-2 rounded-lg" />
                  <input type="text" placeholder="Number of people" className="border border-gray-300 p-2 rounded-lg" />
                  <button className="bg-primary text-white p-2 rounded-lg">Book now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}