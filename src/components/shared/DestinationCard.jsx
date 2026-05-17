import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { PiCalendarBold, PiMapPinLineBold } from 'react-icons/pi';

const DestinationCard = ({ destination }) => {
    // console.log(destination)
        const {_id, country, destinationName, duration, imageUrl, price } =
      destination;
  return (
    <div className="group border border-gray-200  overflow-hidden p-4 shadow-md mt-5 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[#15a1bf]">
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt={destinationName}
          className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 text-[#6C696D] font-semibold mb-2">
          <PiMapPinLineBold /> {country}
        </div>
        <div className="flex justify-between mb-2">
          <p className="font-bold text-2xl transition-colors duration-300 group-hover:text-[#15a1bf]">
            {destinationName}
          </p>
          <p className=" text-[#6C696D] ">
            <span className="text-2xl font-bold text-[#0c0b0b]">
              {price}$
            </span>
            / Person
          </p>
        </div>
        <div className="flex items-center gap-2 text-[#6c606d] font-semibold">
          <PiCalendarBold /> <span>{duration}</span>
        </div>
        <div>
          <Link href={`/destinations/${_id}`}>
                      <p className="flex items-center gap-2 font-semibold text-[#15a1bf] border-b-2 border-[#15a1bf] w-fit transition-all duration-300 group-hover:gap-4">
              Book Now{" "}
              <MdOutlineArrowOutward className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard
