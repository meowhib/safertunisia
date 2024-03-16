import { Button } from "../ui/button";

export default function CTA3() {
  return (
    <div className="bg-white rounded-lg" style={{ backgroundImage: "url('/hero-image.png')" }}>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start your life in Djerba
            <br />
            as a Digital Nomad
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
            Accommodation, Co-working spaces, Transports, Activities, and more...
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
           <Button size={"lg"}>Book now!</Button> 
          </div>
        </div>
      </div>
    </div>
  )
}
