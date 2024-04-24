import { Clock, Pin } from "lucide-react";

export default function ActivityPage(){
    return (
        <div className="w-full flex flex-col mx-auto max-w-7xl px-6 lg:px-8 ">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="text-gray-900 text-3xl font-bold">Location</h1>
                    <p className="text-gray-700 text-lg flex items-center">
                        <Pin size={16} className="inline-block mr-2" />
                        Location
                    </p>
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
    )
}