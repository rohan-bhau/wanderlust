import DestinationCard from "@/components/shared/DestinationCard"
import { getAllDestinations } from "@/lib/data"


const DestinationPage = async() => {
    const destinations = await getAllDestinations()
    console.log(destinations)
  return (
    <div className='mt-25 container mx-auto mb-15'>
      <h2 className="text-3xl font-bold text-[#131111]">
        Explore All Destinations
      </h2>

      <p className="text-[#b7b7b7] text-xl">
        Find your perfect travel experience from our curated collection
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          destinations.map(destination => <DestinationCard key={destination._id} destination={ destination} />)
        }
      </div>
    </div>
  )
}

export default DestinationPage
