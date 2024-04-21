import Link from "next/link"
import CTA3 from "@/components/landing/CTA3";
import { BedIcon, Bike, PlaneIcon, ShieldCheckIcon, WifiIcon } from "lucide-react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide | Safer Tunisia",
  description: "Our guide to live your best life in Djerba",
};

const perks = [
  {
    title: "Good",
    description: "Stay & Food",
    icon: BedIcon,
  },
  {
    title: "Good",
    description: "Transportation",
    icon: Bike,
  },
  {
    title: "Good",
    description: "Life & Activities",
    icon: PlaneIcon,
  },
  {
    title: "Friendly",
    description: "Safety & Health",
    icon: ShieldCheckIcon,
  },
];

export default function GuidePage(){
    const elements = [
        
    ]
    return (
        <div>
            <div
                style={{
                backgroundImage: "url('/hero-image.png')",
                }}
                className="h-96 bg-cover bg-center flex justify-center items-center relative"
            >
                <h1 className="text-4xl font-bold text-white absolute">Our Guide</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-8 -translate-y-8 drop-shadow-lg text-center">
                {perks.map((perk, index) => (
                <div
                    key={index}
                    className="rounded-2xl flex flex-col items-center content-normal"
                >
                    <div className="bg-greenguide w-10 h-10 md:w-16 md:h-16 aspect-square rounded-full flex justify-center items-center">
                    <perk.icon className="text-white" />
                    </div>
                    <div className="flex flex-col mt-4">
                    <p className="text-lg">{perk.description}</p>
                    <h2 className="text-2xl font-bold">{perk.title}</h2>
                    </div>
                </div>
                ))}
            </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mt-8">Where is Djerba?</h2>
            <p className="text-lg leading-8 text-gray-800 mt-4">Djerba is a large Mediterranean island, located in the South of Tunisia off the Northern coast of Africa. Approximately 20 km2, the island has an average temperature of 23° degrees and over 80km of beaches. </p>
            <h2 className="text-3xl font-bold mt-8">Why Visit Djerba?</h2>
            <p className="text-lg leading-8 text-gray-800 mt-4">Djerba has enchanted visitors since antiquity, tempting even itinerant Ulysses to end his travels and settle down. Known for its rich and diverse culture, Djerba is nicknamed “The Land of Peace and Tolerance,” where Muslims, Jews, and Christians have lived side by side for centuries. The island&apos;s streets are filled with distinctive blue and white architecture, with fanciful domes, square houses, and elaborate doors accented with the bright magenta of bougainvillea.</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Boasting a warm climate year-round, pristine white sand sand beaches, and affordable prices, Djerba is a wanderer&apos;s paradise. The island offers a wide variety of activities, whether you&apos;re looking for adventure, relaxation, or culture.</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">There&apos;s no shortage of activities…
                Delve into the history and culture of Djerba
                Affordable, culture, food
                Gateway to Southern Tunisia
            </p>
            <h2 className="text-3xl font-bold mt-8">What to Do</h2>
            <p className="text-lg leading-8 text-gray-800 mt-4">For a laid-back afternoon
            Stroll through the open air museum of Djerbahood, where the walls are a colorful tapestry of street art by graffiti artists from around the world
            </p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Head to the pristine beach of Sidi Jmour to catch the sunset. Or spend the day lounging on Flamingo Island, surrounded by palm trees and crystal clear water.</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Sample the local cuisine at the local food restaurants. Watch out for spice!</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">For a dose of culture</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Visit Synagogue Ghriba, the oldest synagogue in Africa and an active pilgrimage site for Jews around the world.</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Head to Ghazi Mustapha Tower, an impressive fortress built in the 14th century, which became instrumental in the French occupation of Djerba. Today, it is a museum about Djerba history through the colonial period until independence.</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">If you&apos;re feeling adventurous</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Enhance your time on the water with a shot of adrenaline and a dose of wonder; try your hand at kitesurfing, paddle boarding, or kayaking, Quad,...</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Marvel at the olive and palm groves as you zoom around the island on a quad bike safari</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Explore surrounding sites on a day trip</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Djerba is a perfect gateway to Southern Tunisia. Head to the Sahara desert for a weekend trip, visit the set of the original Star Wars in Tataouine, or head to the mountains for a look at traditional village life.</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">For a full overview of activities, visit our <Link className="no-underline text-blue-600 hover:underline" href={"/activities"}>Activities page</Link> or explore our <Link className="no-underline text-blue-600 hover:underline" href={"/activities"}>Trips offering</Link> for an immersive, tailor-made experience.</p>
            <h2 className="text-3xl font-bold mt-8">Culture & History</h2>

            <h3 className="text-2xl font-bold mt-8">Djerba the land of civilisations</h3>
            <p className="text-lg leading-8 text-gray-800 mt-4">Berber, Phoenician, Roman, Byzantine, Arab-muslim, Ottoman, Jewish,...</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">Embark on a captivating journey through the diverse and welcoming community of Djerba, where centuries-old traditions and a harmonious blend of religions create a tapestry of cultural richness.</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">Begin your adventure by immersing yourself in the island&apos;s religious diversity, where mosques, synagogues, and churches stand side by side, symbolizing unity and coexistence. Explore the underground mosques, hidden gems that offer a glimpse into the island&apos;s spiritual heritage, and marvel at the historic Ghriba Synagogue, a testament to Djerba&apos;s Jewish roots.</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">Continue your exploration into the heart of the old medina, where the enchanting church in Houmet Essouk awaits, its ancient walls whispering tales of bygone eras. Wander through narrow alleyways lined with colorful stalls and aromatic street food vendors, immersing yourself in the vibrant atmosphere of the bustling markets.</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">Indulge your senses in the tantalizing flavors of Djerbian cuisine, from savory brik and fresh seafood to aromatic spices and traditional pastries. Venture into the Jewish quarter, where charming street restaurants beckon with mouthwatering dishes and warm hospitality, offering a true taste of local life.</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">As the sun sets, witness the bustling energy of the local markets, where artisans showcase their craftsmanship and vendors peddle an array of treasures, from handwoven textiles to fragrant spices. Experience the timeless traditions of Djerba&apos;s people, from colorful weddings filled with music and dance to age-old rituals that celebrate the bonds of family and community.</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">In Djerba, every corner tells a story, every meal is an adventure, and every moment is a celebration of life&apos;s vibrant tapestry. Come and discover the magic of this enchanting island, where diversity is celebrated, and every experience is an invitation to explore, indulge, and savor the beauty of Djerba&apos;s cultural mosaic.</p>


            Costs & Budget
            <p className="text-lg leading-8 text-gray-800 mt-4">Below you can find average costs in Djerba:</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">Meal, Inexpensive Restaurant: TND 7.30 ($2.64) </p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Meal, Luxury Restaurant TND 60</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Hotel (low budget) TND 80</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Hostel (luxury) TND 60</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Beer (domestic): (0.5 liter bottle) TND 3.00 ($1.08)</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Coffee (regular): TND 2 ($0.9) </p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Bread: (500g): TND 0.65 ($0.23) </p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Water (1.5 liter bottle): TND 0.70 ($0.25)</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">One-way Ticket (local transport): TND 0.68 ($0.25)</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Basic Utilities (monthly): TND 180.00 ($65.13)</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Internet (monthly, 10 Mbps): TND 35.00 ($12.67) </p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Gym Membership (monthly): TND 60.00 ($21.73) </p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Apartment in City Centre (1 bedroom, per month): TND 600.00 ($217.28)</p>

            <h2 className="text-3xl font-bold mt-8">Getting to Djerba</h2>
            <p className="text-lg leading-8 text-gray-800 mt-4">Hosting an international airport, ferry connections, and nearby bus and train stations, Djerba is remarkably well-connected for a laid-back island destination.</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">By Plane</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Djerba Zarzis International Airport boasts direct flights from European destinations including France, Germany, Austria, and Italy for as little as $120 one way. Flights are also available from Tunis (1 hour duration).</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">By Car</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">With a private car, travelers can drive by national highway to Jorf, approximately 500km south of Tunis. From Jorf, a ferry is available every 30 minutes, although wait times can increase depending on vehicle traffic. </p>
            <p className="text-lg leading-8 text-gray-800 mt-4">By Bus (Recommended)</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Direct buses from Tunis - Djerba depart three times per day, at 9:00, 19:45, and 20:00. The duration is approximately 8 hours and cost is TND 35dt. </p>

            <p className="text-lg leading-8 text-gray-800 mt-4">By Louage (Highly recommended)</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Shared taxis are also available from Tunis, departing when full at a cost of TND 45.</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">You need to be as early as you can to make it fast (start from 6 morning)</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">By Train *</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Train connections are available from Tunis to Gabès, after which travelers can take a louage (shared taxi) directly to Djerba. The travel duration is approximately 8 hours in total, at a cost of 45dt (train + louage)</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">There are three departures daily, at 6:05, 13:05, and 21:15</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">Getting Around</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">-Taxis are available and inexpensive, with a trip from one side to the island taking approximately 20 minutes at around 4 - 6 EUR.</p>

            <p className="text-lg leading-8 text-gray-800 mt-4">-Buses are also available between the main towns, although service is only 3-6 times per day. <a className="text-blue-600 hover:underline" target="_blank" href={"/bus.png"}>Download bus time</a></p>

            <p className="text-lg leading-8 text-gray-800 mt-4">-Bicycle and scooter rental is also available at affordable prices <Link className="no-underline text-blue-600 hover:underline" href={"/activities"}>Click here to see activities</Link></p>

            <h2 className="text-3xl font-bold mt-8">Where to Stay</h2>
            <p className="text-lg leading-8 text-gray-800 mt-4">The island offers accommodations appropriate for all budgets.</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Hostel, Hotel, Guest house, Apartments & Houses</p>

            <h2 className="text-3xl font-bold mt-8">Eat & Drink</h2>
            <p className="text-lg leading-8 text-gray-800 mt-4">Local restaurants, street restaurants & coffees, jewish restaurants,...</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">We suggest always </p>
            <p className="text-lg leading-8 text-gray-800 mt-4">In houmet Essouk : El Hanout, El Souffra, El Atiq, Brik Bel Gacem</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">In Erriadh : Beb Hara, Mamie Fatima, Jewish Food</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">In Guellala : Dasbih</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">In Midoun : El Zammouri</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">In Touristique Zone : Larosa</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">Get hided in streets of Djerba and try the popular coffees as Zarra coffee, Hadj Hassen, Ichek Coffee</p>

            <h2 className="text-3xl font-bold mt-8">Weather</h2>
            <p className="text-lg leading-8 text-gray-800 mt-4">Djerba has a mild desert climate, with an average temperature of 23° degrees celsius. The warmest months are June, July, and August with an average high from 30 - 34° and lows ranging from 20 - 24°.</p>
            <p className="text-lg leading-8 text-gray-800 mt-4">The coldest months are November, December, and January with highs of 17 - 18° and lows of 9 - 11°. </p>
            <p className="text-lg leading-8 text-gray-800 mt-4">The sea temperature ranges from 15° in the winter to 29° in the summer.</p>
        </div>
        </div>
    )
}